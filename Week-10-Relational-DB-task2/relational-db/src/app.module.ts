import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv'
import { StudentManagementModule } from './student-management/student-management.module';

dotenv.config()

@Module({
  imports: [TypeOrmModule.forRoot(), StudentManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
