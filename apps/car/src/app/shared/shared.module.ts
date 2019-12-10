import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@capicuarepo/material';
import { RouterModule } from '@angular/router';
import { SnackBarDeleteComponent } from './snack-bar-delete/snack-bar-delete.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [ToolbarComponent, FooterComponent, SnackBarDeleteComponent],
  exports: [ToolbarComponent, FooterComponent, SnackBarDeleteComponent],
  entryComponents: [SnackBarDeleteComponent]
})
export class SharedModule { }
