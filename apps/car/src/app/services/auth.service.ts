import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    // If the user is not logged in we'll send them back to the home page
    if (this.loginService.isLogged()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
