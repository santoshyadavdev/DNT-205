import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AuthGuard } from './guards/auth.guard';
import { TodoGuard } from './guards/todo.guard';
import { LoginComponent } from './login/login.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodosComponent } from './todos/todos.component';
// import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';

const routes: Routes = [
  {
    path: 'employee',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    // below angular 8
    // loadChildren: './employee/employee.module#EmployeeModule',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  // { path: 'onboarding', component: EmployeeOnboardingComponent },
  {
    path: 'department',
    canActivate: [AuthGuard],
    component: DepartmentComponent
  },
  {
    path: 'todos', component: TodosComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: ':id', component: TodoDetailsComponent },
      // { path: ':id/edit', component: TodoDetailsComponent },
    ],
    resolve: {
      todoData: TodoGuard
    }
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
