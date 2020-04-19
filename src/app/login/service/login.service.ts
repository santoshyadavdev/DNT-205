import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  isAdmin = false;
  token = 'fskfdsdfjhg';

  constructor() { }

  login(username: string, password: string) {
      if (username === 'admin' && password === 'admin') {
        this.isLoggedIn = true;
        this.isAdmin = true;
        sessionStorage.setItem('authToken', this.token);
      }
      if (username === 'user' && password === 'user') {
        this.isLoggedIn = true;
        sessionStorage.setItem('authToken', this.token);
      }
      return this.isLoggedIn;
  }
}
