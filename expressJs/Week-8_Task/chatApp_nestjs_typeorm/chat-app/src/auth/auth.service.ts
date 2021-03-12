import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, request } from 'express';
import { Repository } from 'typeorm';
import { User } from './entity/User.entity';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private userRepository:Repository<User>
    ){}

    async createUser(createUserDto:any):Promise<User>{
        return this.userRepository.save(createUserDto);
    }

    async getUser(data:any):Promise<User>{
       return this.userRepository.findOne(data);
    }

    async getAllUser():Promise<User[]>{
        return await this.userRepository.find({select:["name","id"]})
    }
    
}
