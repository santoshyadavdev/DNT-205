import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class ObseravableService {
  employeeList: Employee[] = [];
  subject = new Subject<Employee[]>();
  constructor() { }

  addEmployee(employee: Employee) {
    this.employeeList.push(employee);
    this.subject.next(this.employeeList);
  }

  getEmployee() {
    return this.subject.asObservable();
  }
}
