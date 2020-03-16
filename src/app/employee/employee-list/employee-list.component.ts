import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList: Employee[] = [
    {
      id: 1,
      name: 'Pratik',
      email: 'test@gmail.com',
      dob: new Date('11-Feb-1997'),
      salary: 20000
    },
    {
      id: 2,
      name: 'Saurabh',
      email: 'test1@gmail.com',
      dob: new Date('11-Feb-1998'),
      salary: 30000
    },
    {
      id: 3,
      name: 'Alex',
      email: 'test2@gmail.com',
      dob: new Date('11-Feb-1999'),
      salary: 40000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(i: number,emp: Employee) {
    return  emp.id;
  }

}
