import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators';
import { Todo } from '../models/todos';
import { APP_CONFIG } from 'src/app/appconfig.provider';
import { AppConfig } from 'src/app/appconfig';


export class TodosService {

  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private isLoggedIn: boolean) {
      console.log(isLoggedIn);
    }

  getTodos() {
    return this.http.get<Todo[]>(`${this.appConfig.apiEndpoint}/todos`, {
      headers: new HttpHeaders().set('access-token', 'dfdsfds387645sdfhkj')
    }).pipe(tap(data => console.log(data)));
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(`${this.appConfig.apiEndpoint}/todos`, todo);
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>(`${this.appConfig.apiEndpoint}/todos` + todo.id, todo, {
      headers: new HttpHeaders().set('access-token', 'dfdsfds387645sdfhkj')
    });
  }

  getPhotos() {
    const request = new HttpRequest('GET', `${this.appConfig.apiEndpoint}/photos`, {
      reportProgress: true
    });

    return this.http.request(request);
  }

}
