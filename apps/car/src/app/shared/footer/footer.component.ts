import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'capicuarepo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  version: string;

  constructor() { }

  ngOnInit() {
    this.version = environment.version;
  }

}
