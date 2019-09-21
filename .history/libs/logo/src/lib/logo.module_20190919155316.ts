import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '@capicuarepo/logo';

@NgModule({
  imports: [CommonModule],
  exports: [LogoComponent],
  declarations: [
    LogoComponent
  ]
})
export class LogoModule { }
