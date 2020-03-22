import { Component, OnInit,
  ViewChild, ElementRef,
  AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Employee } from './employee';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  // @ViewChild(HeaderComponent, { static: true }) header: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildren: QueryList<HeaderComponent>;

  @ViewChild(HeaderComponent) header: HeaderComponent;

  @ViewChild('errorDiv', { static: true }) errorDiv: ElementRef;

  name: string;
  isHidden = false;

  employee: Employee = {
    id: 1,
    name: 'Pratik',
    email: 'test@gmail.com',
    dob: new Date('11-Feb-1997'),
    salary: 20000
  };

  constructor() {
    this.name = 'Umair';
  }

  ngOnInit(): void {

  }

  toggle() {
    this.isHidden = !this.isHidden;
  }

  ngAfterViewInit(): void {
    console.log(this.headerChildren);
    // console.log(this.header);
    // this.header.title = 'Employee';
    // this.errorDiv.nativeElement.innerText = 'Some error';
    this.headerChildren.forEach((header)=> {
      header.title = 'New Employee';
    });
  }



}
