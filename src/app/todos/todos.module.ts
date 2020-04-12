import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    PhotosComponent,
    TodoAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TodosModule { }
