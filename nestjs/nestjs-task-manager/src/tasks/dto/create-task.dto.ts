import { IsNotEmpty, IsString, Length, MaxLength, MinLength, ValidationArguments } from 'class-validator'

export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(10, {
        message:'Title is too short. Minimum length is $constraint1 characters, but actual is $value', })
    @MaxLength(50, {
        // here, $constraint1 will be replaced with "50", and $value with actual supplied value
        message: 'Title is too long. Maximal length is $constraint1 characters, but actual is $value',
      })
    title:string;

    @IsString()
    @IsNotEmpty()
    description:string;
    
}