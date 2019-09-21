import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [CommonModule],
  exports: [LogoComponent],
  declarations: [
    LogoComponent
  ]
})
export class LogoModule { }
