import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { AuditMiddleware } from '../middlewares/audit.middleware';
@Module({
   controllers:[TasksController],
   providers:[ TasksService]
})
export class TasksModule implements NestModule {
   configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuditMiddleware)
      .forRoutes({path:'tasks/*',method:RequestMethod.DELETE});

   }
}