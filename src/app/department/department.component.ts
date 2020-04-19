import { Component, OnInit, Self } from '@angular/core';
import { Department } from './department';
import { DepartmentService } from './services/department.service';
import { ObseravableService } from '../employee/services/obseravable.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';
import { BehaviorService } from '../employee/services/behavior.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService]
})
export class DepartmentComponent implements OnInit {

  deptList: Department[] = [];

  selectedDepartment: Department;
  obs$ : Observable<Employee[]>;

  // deptService = new DepartmentService();

  constructor(@Self() private deptService: DepartmentService,
  private obsService: ObseravableService,
  private behService: BehaviorService) { }

  ngOnInit(): void {
    // this.obs$ = this.obsService.getEmployee();
    this.obs$ = this.behService.getEmployee();
    this.deptList = this.deptService.getDepartments();
    console.log(this.deptList);
    // this.deptList = [
    //   { id: 1, name: 'Admin', hod: 'Test', empCount: 100 },
    //   { id: 2, name: 'Marketing', hod: 'Test1', empCount: 200 },
    //   { id: 3, name: 'IT', hod: 'Test2', empCount: 400 }
    // ];

  }

  addDepartment() {
    const department = { id: 4, name: 'DevOps', hod: 'Test3', empCount: 20 };
    this.deptList = this.deptService.addDepartment(department);
    // this.deptList.push({ id: 4, name: 'DevOps', hod: 'Test3', empCount: 20 });
  }

  receiveFromChild(dept: Department) {
    this.selectedDepartment = dept;
  }

}
