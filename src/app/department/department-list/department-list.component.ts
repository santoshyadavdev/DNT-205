import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  @Input() departmentList: Department[] = [];

  @Output() selectDepartment = new EventEmitter<Department>();
  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(department: Department): void {
    console.log(department);
    this.selectDepartment.emit(department);
  }

}
