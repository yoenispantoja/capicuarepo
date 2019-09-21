import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent
  ],
  declarations: [SharedComponentsComponent]
})
export class SharedComponentsModule { }
