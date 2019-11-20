import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SocialService } from 'ngx-social-button';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private socialAuthService: SocialService, private route: Router) { }

  login(socialUser: any) {
    localStorage.setItem('socialUser', JSON.stringify(socialUser));
    this.route.navigateByUrl('/sports');
  }

  logout() {
    if (this.socialAuthService.isSocialLoggedIn()) {
      this.socialAuthService.signOut()
        .then(() => {
          this.route.navigateByUrl('login');
          localStorage.clear();
        })
        .catch((err) => {

        });
    }
  }

  isLogged(): boolean {
    if (localStorage.getItem('socialUser')) {
      return true;
    }
    else {
      return false;
    }
  }

}
