import { Module } from '@nestjs/common';
import { StudentManagementController } from './student-management.controller';
import { StudentManagementService } from './student-management.service';

@Module({
  controllers: [StudentManagementController],
  providers: [StudentManagementService]
})
export class StudentManagementModule {}
