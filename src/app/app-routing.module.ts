import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
// import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';

const routes: Routes = [
  {
    path: 'employee',
    // below angular 8
    // loadChildren: './employee/employee.module#EmployeeModule',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  // { path: 'onboarding', component: EmployeeOnboardingComponent },
  { path: 'department', component: DepartmentComponent },
  {
    path: 'todos', component: TodosComponent, children: [
      { path: ':id', component: TodoDetailsComponent },
      // { path: ':id/edit', component: TodoDetailsComponent },
    ]
  },
  { path: '', redirectTo: 'department', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
