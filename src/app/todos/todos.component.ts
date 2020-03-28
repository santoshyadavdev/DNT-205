import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    console.log(this.todosService.getTodos())
  }

}
