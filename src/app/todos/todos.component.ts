import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';
import { Todo } from './models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: Todo[] = [];
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((data) => this.todoList = data);
  }

}
