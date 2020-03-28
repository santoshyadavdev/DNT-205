import { Component, DoCheck, SkipSelf } from '@angular/core';
import { DepartmentService } from './department/services/department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `Hello world from template
  // cvcvcjkhkjvbh`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'ecomapp';
  userType = 'Users';

  constructor(@SkipSelf() private deptService: DepartmentService) { }

  ngDoCheck(): void {
    console.log('this is do check');
  }

  addDeprtment() {
    const department = { id: 4, name: 'DevOps', hod: 'Test3', empCount: 20 };
    const deptList = this.deptService.addDepartment(department);
    console.log(this.deptService.deptList);
  }
}
