import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginStatus = 'Not Loggedin';
  constructor(private fb: FormBuilder,
    private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    if (this.loginService.login(this.loginForm.get('userName').value,
      this.loginForm.get('password').value)) {
      this.router.navigate(['department']);
    } else {
      this.loginStatus = 'Failed';
    }
    // if (this.loginForm.get('userName').value === 'admin' &&
    //   this.loginForm.get('password').value === 'admin'
    // ) {
    //   // code to redirect user
    //   // console.log('login success')
    //   this.router.navigate(['department']);
    // }
  }

}
