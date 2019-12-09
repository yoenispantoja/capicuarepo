import { UtilesModule } from '@capicuarepo/utiles';
import { LogoModule } from '@capicuarepo/logo';

import { Page404Component } from './page404/page404.component';
import { PageRoutingModule } from './pages.routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
    LogoModule,
    UtilesModule

  ],
  declarations: [PagesComponent, Page404Component],
})
export class PagesModule { }
