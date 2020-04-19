import { Injectable } from '@angular/core';
import { Department } from '../department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  deptList: Department[] = [];
  constructor() {
    console.log('new instance created');
  }

  getDepartments(): Department[] {
    return this.deptList = [
      { id: 1, name: 'Admin', hod: 'Test', empCount: 100 },
      { id: 2, name: 'Marketing', hod: 'Test1', empCount: 200 },
      { id: 3, name: 'IT', hod: 'Test2', empCount: 400 }
    ];

  }

  addDepartment(department: Department) {
    // this.deptList = [...this.deptList, { id: 4, name: 'DevOps', hod: 'Test3', empCount: 20 }];
    this.deptList.push({ id: 4, name: 'DevOps', hod: 'Test3', empCount: 20 });
    return this.deptList;
  }
}
