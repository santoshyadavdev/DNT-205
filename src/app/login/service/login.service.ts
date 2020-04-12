import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  token = 'fskfdsdfjhg';

  constructor() { }

  login(username: string, password:string) {
      if(username === 'admin' && password==='admin'){
        this.isLoggedIn = true;
        sessionStorage.setItem('authToken',this.token);
      }
      return this.isLoggedIn;
  }
}
