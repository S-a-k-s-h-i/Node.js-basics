import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { Chats } from './entity/Chats.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([Chats]),AuthModule],
  controllers: [ChatsController,],
  providers: [ChatsService]
})
export class ChatsModule {}
