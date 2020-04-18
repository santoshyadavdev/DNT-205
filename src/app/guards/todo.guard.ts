import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Resolve
} from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../todos/models/todos';
import { TodosService } from '../todos/services/todos.service';

@Injectable({
  providedIn: 'root'
})
export class TodoGuard implements Resolve<Todo[]> {
  constructor(private todoService: TodosService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> {
    return this.todoService.getTodos();
  }
}
