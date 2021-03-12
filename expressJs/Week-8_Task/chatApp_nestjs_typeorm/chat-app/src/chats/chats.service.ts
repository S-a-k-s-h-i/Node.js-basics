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
        console.log('service',chats);
        this.chatsRepository.save(chats);
    }

    async remove(id:string):Promise<void>{
        await this.chatsRepository.delete(id);
    }

    async chatsBetween(sender:string,recipient:string):Promise<Chats[]>{
        console.log('sender',sender);
        console.log('receiver',recipient);

        const cc = await this.chatsRepository.createQueryBuilder("chats")
       .getMany();
       console.log("CC",cc)


        console.log('chats between',await this.chatsRepository.createQueryBuilder("chats")
        .leftJoinAndSelect("["chats.sender","chats.recipient"]","user")
        .where("chats.sender=:sender",{sender:sender})
        .where("chats.recipient=:recipient",{recipient:recipient})
        .where("chats.sender=:sender AND chats.recipient=:recipient",{sender:sender,recipient:recipient})
        .orWhere("chats.sender=:recipient AND chats.recipient=:sender",{recipient:recipient,sender:sender})
        .orderBy("chats.date")
        .getMany());
        return await this.chatsRepository.createQueryBuilder("chats")
        .where("chats.sender=:sender",{sender:sender})
        .where("chats.recipient=:recipient",{recipient:recipient})
        .where("chats.sender=:sender AND chats.recipient=:recipient",{sender:sender,recipient:recipient})
        .orWhere("chats.sender=:recipient AND chats.recipient=:sender",{recipient:recipient,sender:sender})
        .orderBy("chats.date")
        
        .getMany();
    }
}
