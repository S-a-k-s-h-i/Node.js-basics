import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Query, UseFilters } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { Stats } from 'fs';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { HttpExceptionFilter } from '../filters/http-exception.filter';


@Controller('tasks')
// @UseFilters(HttpExceptionFilter)
export class TasksController {
    constructor(private tasksService:TasksService){}

    @Get()
    getTasks(@Query() getTasksFilterDto:GetTasksFilterDto):Task[]{
        if(Object.keys(getTasksFilterDto).length)
          return this.tasksService.getTaskWithFilter(getTasksFilterDto);
        else
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    // @UseFilters(HttpExceptionFilter)    
    getTaskById(@Param('id') id:string):Task{
       let result= this.tasksService.getTaskById(id)
       if(result){
         return result;
       }else{
         throw new HttpException('Task not found',HttpStatus.NOT_FOUND);
       }
    }
    
    @Get('findByFilter')
    findBystatus(@Query() query) {
      
    } 

    @Post()
    // createTask(@Body()body){
    //    console.log('body..',body);
    // }
    createTask(
        // @Body('title') title:string,
        // @Body('description') description:string
       @Body() createTaskDto:CreateTaskDto
    ):Task{
      return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id:string):void{
      this.tasksService.deleteTaskById(id);
    }
    
    @Patch('/:id/status')
    updateTask(@Param('id') id:string,@Body('status') status:TaskStatus):Task{
       return this.tasksService.updateTaskByStatus(id,status);
    }
    }
