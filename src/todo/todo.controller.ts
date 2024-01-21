import { Controller, Get, Post, Patch, Body, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ITodo } from './todo'

@Controller('todo')
export class TodoController {
   constructor(private readonly todoService: TodoService) {}

   @Get()
   findAll() {
     return this.todoService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
   }

   @Post()
   create(@Body() todo: ITodo) {
    return this.todoService.create(todo);
   }

   @Delete(':id')
   delete(@Param('id') id: string) {
    return this.todoService.remove(id);
   }

   @Patch(':id/changeStatus')
   switchStatus(@Param('id') id: string){
    return this.todoService.switchStatus
   }
}
