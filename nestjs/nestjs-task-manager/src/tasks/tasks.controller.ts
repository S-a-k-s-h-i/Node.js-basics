import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, Query, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { Stats } from 'fs';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { HttpExceptionFilter } from '../filters/http-exception.filter';
// import { ValidationPipe } from '../pipes/validation.pipe';


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
    @UsePipes() 
    getTaskById(@Param('id') id:string):Task{
       let result= this.tasksService.getTaskById(id)
       console.log("result",result)
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
    @UsePipes(ValidationPipe)
    // createTask(@Body()body){
    //    console.log('body..',body);
    // }
    createTask(
        // @Body('title') title:string,
        // @Body('description') description:string
       @Body() createTaskDto:CreateTaskDto
    ):Task{
      console.log(createTaskDto)
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
