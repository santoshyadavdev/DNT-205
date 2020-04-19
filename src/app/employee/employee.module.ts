import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeOnboardingComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class EmployeeModule { }
