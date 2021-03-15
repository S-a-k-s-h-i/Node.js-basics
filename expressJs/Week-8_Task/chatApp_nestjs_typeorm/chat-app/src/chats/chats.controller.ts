import { Body, Controller, Delete, Get, Param, Post, Render, Req, UseGuards } from '@nestjs/common';
import { request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChatsService } from './chats.service';
import { Chats } from './entity/Chats.entity';
import { Request} from 'express';

@Controller('chats')
export class ChatsController {
    constructor(
                private chatsService:ChatsService,
                private authService:AuthService
                ){}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    @Render('index')
    async root(@Req() req:Request){
        var allusers=await (await this.authService.getAllUser()).filter((result) => result.name!==(req.user['username']));
        return {sendername:req.user['username'],senderId:req.user['userId'],allUsers:allusers}
    }
    
    @Get('allChats')
    findAll(){
        return this.chatsService.getChats();
    }

    @Post()
    async create(@Body() chats:Chats){
        console.log('chats',chats);
        const chat = this.chatsService.createChats(chats);
        return chat;
    }

    @Delete('/:id')
    remove(@Param('id') id:string):void{
        this.chatsService.remove(id);
    }

    @Get('/:senderId/:recipientId')
    async ChatofSenderRecipient(@Param('senderId') senderId:string,@Param('recipientId') recipientId:string){
       return await this.chatsService.chatsBetween(senderId,recipientId);
    }
}
