import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


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
