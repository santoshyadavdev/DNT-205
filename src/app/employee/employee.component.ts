import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name = 'Umair';
  isHidden = false;

  employee: Employee = {
    id: 1,
    name: 'Pratik',
    email: 'test@gmail.com',
    dob: new Date('11-Feb-1997'),
    salary: 20000
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isHidden = !this.isHidden;
  }

}
