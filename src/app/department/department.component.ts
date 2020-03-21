import { Component, OnInit } from '@angular/core';
import { Department } from './department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  deptList: Department[] = [
    { id: 1, name: 'Admin', hod: 'Test', empCount: 100 },
    { id: 2, name: 'Marketing', hod: 'Test1', empCount: 200 },
    { id: 3, name: 'IT', hod: 'Test2', empCount: 400 }
  ];

  selectedDepartment: Department;

  constructor() { }

  ngOnInit(): void {
  }

  receiveFromChild(dept: Department) {
    this.selectedDepartment  = dept;
  }

}
