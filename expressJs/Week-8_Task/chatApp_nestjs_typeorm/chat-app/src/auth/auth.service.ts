import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/User.entity';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private userRepository:Repository<User>
    ){ console.log('USER REPO ',userRepository);}

    async createUser(createUserDto:any):Promise<User>{
        return this.userRepository.save(createUserDto);
    }

    async getUser(data:any):Promise<User>{
       return this.userRepository.findOne(data);
    }
}
