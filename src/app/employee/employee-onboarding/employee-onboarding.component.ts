import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.css']
})
export class EmployeeOnboardingComponent implements OnInit {

  // searchInput: FormControl;
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.searchInput = new FormControl('wrtretet');
    this.employeeForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      address: this.fb.group({
        addrLine1: new FormControl(''),
        addrLine2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl('')
      })
    });
  }

}
