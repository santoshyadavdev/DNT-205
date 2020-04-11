import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  onboardingData = {
    name: 'Employee1',
    email: 'emp1@test.com',
    dob: '13-Mar-1980'
  };

  constructor() { }

  getOnboardingData() {
    return of(this.onboardingData);
  }
}
