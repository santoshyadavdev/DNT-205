import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos.component';
import { TodosService } from './services/todos.service';
import { todoFactory, todoProvider } from './todo.factory';
import { LoginService } from '../login/service/login.service';
import { APP_CONFIG } from '../appconfig.provider';


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
  ],
  providers: [todoProvider]
})
export class TodosModule { }
