import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { EmployeeComponent } from './employee.component';
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
