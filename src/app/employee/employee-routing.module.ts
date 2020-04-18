import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { EmployeeGuard } from './guards/employee.guard';


const routes: Routes = [
  { path: '', component: EmployeeComponent },
  {
    path: 'onboarding', component: EmployeeOnboardingComponent,
    canDeactivate: [EmployeeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
