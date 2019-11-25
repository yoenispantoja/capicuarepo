import { LogoModule } from '@capicuarepo/logo';

import { Page404Component } from './page404/page404.component';
import { PageRoutingModule } from './pages.routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@capicuarepo/material';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
    MaterialModule,
    LogoModule,
  ],
  declarations: [PagesComponent, Page404Component],
})
export class PagesModule { }
