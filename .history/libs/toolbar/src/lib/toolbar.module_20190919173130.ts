import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@capicuarepo/material';
import { AppRoutingModule } from '../../../../../capicuarepo/apps/car/src/app/app-routing.module'

@NgModule({
  imports:
    [CommonModule,
      MaterialModule,
      AppRoutingModule
    ],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent]
})
export class ToolbarModule { }
