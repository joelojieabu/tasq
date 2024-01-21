import { Injectable } from '@nestjs/common';
import { ITodo } from './todo';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity'

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>,
      ) {}

    private todos : Todo[] = [];

      findAll() {
        // return this.todos;
        return this.todoRepository.find();
      }

      findOne(id: string) {
        return this.todos.find(todo => todo.id === id);
      }

      create(todo: Todo) {
        const newTodo = { id: Date.now().toString(), ...todo, status: 'new' };
        this.todos.push(newTodo);
        return newTodo;
      }

      switchStatus(id: string) {
        const todo = this.todos.find(todo => todo.id === id);
        if(todo){
            switch(todo.status) {
                case "new": todo.status = "started";
                break;
                case "started": todo.status = "completed";
                break;
            }
        }
      }

      remove(id: string) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if(index !== -1){
            this.todos.splice(index, 1);
        return {success: true} 
        }
        return {success: false, message: "todo does not exist"}
      }
}
