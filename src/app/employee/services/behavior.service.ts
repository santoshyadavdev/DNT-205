import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  employeeList: Employee[] = [];
  subject = new BehaviorSubject<Employee[]>([{
    id: 0,
    dob: new Date(),
    email: '',
    name: '',
    salary: 0
  }]);
  constructor() { }

  addEmployee(employee: Employee) {
    this.employeeList.push(employee);
    this.subject.next(this.employeeList);
  }

  getEmployee() {
    return this.subject.asObservable();
  }
}
