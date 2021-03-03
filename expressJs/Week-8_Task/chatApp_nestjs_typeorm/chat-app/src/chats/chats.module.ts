import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { Chats } from './entity/Chats.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Chats])],
  controllers: [ChatsController],
  providers: [ChatsService]
})
export class ChatsModule {}
