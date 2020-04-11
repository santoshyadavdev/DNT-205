import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { OnboardingService } from './services/onboarding.service';
@Component({
  selector: 'app-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.css']
})
export class EmployeeOnboardingComponent implements OnInit {

  // searchInput: FormControl;
  employeeForm: FormGroup;

  get pastExp() {
    return this.employeeForm.get('pastExp') as FormArray;
  }
  constructor(private fb: FormBuilder,
    private onBoardingService: OnboardingService) { }

  ngOnInit(): void {
    // this.searchInput = new FormControl('wrtretet');
    this.employeeForm = this.fb.group({
      name: new FormControl({ value: '', disabled: true }, {
        updateOn: 'blur', validators: [Validators.required, Validators.minLength(10)]
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl(''),
      address: this.fb.group({
        addrLine1: new FormControl('', [Validators.required, Validators.minLength(5)]),
        addrLine2: new FormControl('', Validators.required),
        city: new FormControl(''),
        pin: new FormControl('')
      }),
      pastExp: this.fb.array([
        this.buildForm()
      ])
    }, { updateOn: 'blur' });

    this.employeeForm.valueChanges.subscribe((data) => console.log(data));

    this.bindForm();
    this.employeeForm.disable();
  }

  bindForm() {
    this.onBoardingService.getOnboardingData().subscribe(
      (data) => this.employeeForm.patchValue(data));
  }

  private buildForm(): any {
    return this.fb.group({
      orgName: new FormControl('', Validators.required),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      designation: new FormControl('')
    });
  }

  addExp() {
    this.pastExp.push(this.buildForm());
  }

  removeExp(i: number) {
    this.pastExp.removeAt(i);
  }

  removeAllExp() {
    this.pastExp.clear();
  }

  addOnboardingData() {
    // console.log(this.employeeForm.value);
    console.log(this.employeeForm.getRawValue());
  }

  editForm() {
    this.employeeForm.enable();
  }
}
