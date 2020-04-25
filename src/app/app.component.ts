import { Component, DoCheck, SkipSelf, Inject } from '@angular/core';
import { DepartmentService } from './department/services/department.service';
import { AppConfig } from './appconfig';
import { APP_CONFIG } from './appconfig.provider';

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

  constructor(@SkipSelf() private deptService: DepartmentService,
    @Inject(APP_CONFIG) private appConfig: AppConfig) { }

  ngDoCheck(): void {
    console.log('this is do check');
    console.log(this.appConfig);
  }

  addDeprtment() {
    const department = { id: 4, name: 'DevOps', hod: 'Test3', empCount: 20 };
    const deptList = this.deptService.addDepartment(department);
    console.log(this.deptService.deptList);
  }
}
