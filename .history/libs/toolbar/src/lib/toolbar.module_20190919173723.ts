import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@capicuarepo/material';
import { AppRoutingModule } from '../../../../../capicuarepo/apps/car/src/app/app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:
    [CommonModule,
      MaterialModule,
      AppRoutingModule,
      BrowserAnimationsModule
    ],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent]
})
export class ToolbarModule { }
