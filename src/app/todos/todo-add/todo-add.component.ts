import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../models/todos';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todo: Todo = {
    completed: false,
    title: '',
    userId: 0
  };
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo(todoForm: NgForm) {
    console.log(this.todo);
    this.todoService.addTodo(this.todo).subscribe((data) => {
      todoForm.resetForm();
    });
  }

}
