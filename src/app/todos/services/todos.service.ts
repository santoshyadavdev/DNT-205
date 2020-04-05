import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      headers: new HttpHeaders().set('access-token', 'dfdsfds387645sdfhkj')
    });
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>('https://jsonplaceholder.typicode.com/todos/' + todo.id, todo, {
      headers: new HttpHeaders().set('access-token', 'dfdsfds387645sdfhkj')
    });
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true
    });

    return this.http.request(request);
  }

}
