import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoRoutingModule } from './photo.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@capicuarepo/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule

  ],
  declarations: [PhotoListComponent]
})
export class PhotoModule { }
