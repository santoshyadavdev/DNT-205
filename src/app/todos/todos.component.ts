import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodosService } from './services/todos.service';
import { Todo } from './models/todos';
import { Observable, Subscription } from 'rxjs';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  // todoList: Todo[] = [];
  // subscription: Subscription;
  todoList$: Observable<Todo[]>;
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todoList$ = this.todosService.getTodos();
    // this.subscription = this.todosService.getTodos().subscribe((data) => this.todoList = data);
    // const data =  this.todosService.getTodos();
  }

  updateTask() {
    const task: Todo = {
      id: 1,
      completed: true,
      title: 'Test update',
      userId: 1
    };
    this.todosService.updateTodo(task).subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    //   if (this.subscription) {
    //     this.subscription.unsubscribe();
    //   }
  }

}
