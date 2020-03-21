import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from './employee';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @ViewChild(HeaderComponent, { static: true }) header: HeaderComponent;

  @ViewChild('errorDiv', { static: true }) errorDiv: ElementRef;

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
    this.header.title = 'Employee';
    this.errorDiv.nativeElement.innerText = 'Some error';
  }

  toggle() {
    this.isHidden = !this.isHidden;
  }

}
