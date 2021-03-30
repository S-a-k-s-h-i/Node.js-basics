import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Chats } from './entity/Chats.entity';

@Injectable()
export class ChatsService {
    constructor(
        @InjectRepository(Chats) private chatsRepository: Repository<Chats>,
      ) {}

    async getChats():Promise<Chats[]>{
        return await this.chatsRepository.find();
    }

    async createChats(chats:Chats){
        this.chatsRepository.save(chats);
    }

    async remove(id:string):Promise<void>{
        await this.chatsRepository.delete(id);
    }

    async chatsBetween(senderId:string,recipientId:string):Promise<Chats[]>{
        return await this.chatsRepository.createQueryBuilder("chats")
        .leftJoinAndSelect("chats.sender","sender")
        .leftJoinAndSelect("chats.recipient","recipient")
        .where("chats.senderId=:senderId AND chats.recipientId=:recipientId",{senderId:senderId,recipientId:recipientId})
        .orWhere("chats.senderId=:recipientId AND chats.recipientId=:senderId",{recipientId:recipientId,senderId:senderId})
        .orderBy("chats.date")
        .getMany();
    }

    async getSenderRecipient(id){
        return this.chatsRepository.find(id)

    }
}
