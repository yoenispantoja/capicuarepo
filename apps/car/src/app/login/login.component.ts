import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'capicuarepo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  shareObj = {
    href: "FACEBOOK-SHARE-LINK",
    hashtag: "#FACEBOOK-SHARE-HASGTAG"
  };
  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.loginService.logout();
  }
  getSocialUser(socialUser) {
    this.loginService.login(socialUser);
  }

}
