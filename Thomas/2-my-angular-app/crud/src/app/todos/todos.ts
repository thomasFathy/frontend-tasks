import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo.type';
import { TodosService } from './../services/todos';
import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})


export class Todos implements OnInit {
  todoService = inject(TodosService);
  todoItems= signal<Array<Todo>>([]);

  ngOnInit(): void {

  this.todoService
  .getTodosFromApi()
  .pipe(

    catchError((err)=>{console.log(err);
    throw err;})
  ).subscribe((todos)=>this.todoItems.set(todos))

    }
}
