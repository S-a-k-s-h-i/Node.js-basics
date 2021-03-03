import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { Chats } from './entity/Chats.entity';

@Controller('chats')
export class ChatsController {

    constructor(private chatsService:ChatsService){}

    @Get()
    @Render('index')

    @Get('/allChats')
    findAll(){
        return this.chatsService.getChats();
    }

    @Post()
    create(@Body() chats:Chats){
        console.log(chats);
        return this.chatsService.createChats(chats);
    }

    @Delete('/:id')
    remove(@Param('id') id:string):void{
        this.chatsService.remove(id);
    }

    @Get('/:sender/:recipient')
    ChatofSenderRecipient(@Param('sender') sender:string,@Param('recipient') recipient:string){
       return this.chatsService.chatsBetween(sender,recipient);
    }
}
