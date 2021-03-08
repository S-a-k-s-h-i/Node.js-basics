import { IsEmail, IsInt, isNotEmpty, IsNotEmpty, Length, MaxLength, MinLength } from "class-validator";

export class CreateUserDto{
    @MinLength(3,{
        message: 'Name is too short. Minimal length is $constraint1 characters, but actual is $value',
    })
    @MaxLength(10,{
        message: 'Name is too long. Maximal length is $constraint1 characters, but actual is $value',
    })
    name:string;

    @IsEmail()
    email:string;
    
    @IsInt()
    phone:number;
    
    @MinLength(4)
    @MaxLength(20)
    password:string;
}