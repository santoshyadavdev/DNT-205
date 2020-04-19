import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    PhotosComponent,
    TodoAddComponent,
    TodoDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class TodosModule { }
