import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportListComponent } from './components/sport-list/sport-list.component';
import { SportRoutingModule } from './sport-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SportListComponent]
})
export class SportModule { }
