import { ToolbarComponent } from './toolbar/toolbar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@capicuarepo/material';



@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    ToolbarComponent
  ]

})
export class SharedComponentsToolbarModule { }
