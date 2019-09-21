import { ToolbarComponent } from '@capicuarepo/shared';
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
