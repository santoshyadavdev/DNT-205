import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { TodosComponent } from './todos/todos.component';
import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'onboarding', component: EmployeeOnboardingComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
