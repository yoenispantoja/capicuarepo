import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SocialService } from 'ngx-social-button';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'capicuarepo-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  usuario: any = "Yoenis";
  avatarSrc: string;

  constructor(
    private socialAuthService: SocialService,
    private route: Router,
    private routeActive: ActivatedRoute) { }

  ngOnInit() {
    //Chequeando la información de usuario logueado
    if (localStorage.getItem('socialUser')) {
      this.usuario = JSON.parse(localStorage.getItem('socialUser')).name;
      this.avatarSrc = JSON.parse(localStorage.getItem('socialUser')).image;
    }

  }
  signOut() {
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

}
