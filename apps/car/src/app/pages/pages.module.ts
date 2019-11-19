import { ToolbarModule } from './../../../../../libs/toolbar/src/lib/toolbar.module';
import { PageRoutingModule } from './pages.routing.module';
import { UserModule } from './user/user.module';
import { SportModule } from './sport/sport.module';
import { PhotoModule } from './photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    SportModule,
    UserModule,
    PageRoutingModule,
    ToolbarModule,
    SharedModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
