import { BadRequestException, Body, Controller, Get, Post, Render, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { Response,Request} from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { use } from 'passport';

@Controller('auth')
export class AuthController {
     constructor(
         private userService:AuthService,
         private jwtService: JwtService
         ){}

     @Get()
     @Render('registration')
     root(){
        }

     @Get('login')
     @Render('login')
     loginPage(){

     }

     @Post('register')
     async register(
        @Body() createUserDto:CreateUserDto,
        @Req() request:Request
     ){
       try{
        const {password} =createUserDto;
        const hashpassword=await bcrypt.hash(password,12);
        createUserDto.password=hashpassword;
        const user=await this.userService.createUser(createUserDto)
        //Removing password property
        delete user.password
       
        return user;
       }catch(err){
        if (err.code === 'ER_DUP_ENTRY') {
            //handleHttpErrors(SYSTEM_ERRORS.USER_ALREADY_EXISTS);
            throw new BadRequestException('User already exist with this email');

        }
       }
     }

     @Post('login')
     async login(
         @Body('email') email:string,
         @Body('password') password:string,
         @Res({passthrough:true}) response:Response
     ){
         const user=await this.userService.getUser({email});

         if(!user){
             throw new BadRequestException('Invalid Credentials...user doesnot exist with this email');
         }

         if(!await bcrypt.compare(password,user.password)){
             throw new BadRequestException('Invalid Credentials....password is wrong')
         }
         const payload={username:user.name,sub:user.id}
         const jwt=this.jwtService.sign(payload);

         response.cookie('jwt',jwt,{httpOnly:true});

         return {
             message:'success'
         }
     }
     
     @UseGuards(JwtAuthGuard)
     @Get('user')
     getProfile(@Req() req) {
        return req.user;
      }
    //  async user(@Req() request:Request){
    //     try{
    //         const cookie=request.cookies['jwt'];
    //         console.log(request.cookies)
    //         const data=await this.jwtService.verify(cookie);
    //         console.log(data);
    //         if(!data){
    //             throw new UnauthorizedException();
    //         }
    //         const user=await this.userService.getUser({id:data['sub']});
    //         console.log('user',user)
    //         //Strip password property
    //         const {password,...result}=user
   
    //         return result
    //     }catch(e){
    //         throw new UnauthorizedException();
    //     }
    //  }

     @Post('logout')
     async logout(@Res({passthrough:true}) response:Response){
         response.clearCookie('jwt');

         return {
             message:'logout successfully'
         }

     }

}
