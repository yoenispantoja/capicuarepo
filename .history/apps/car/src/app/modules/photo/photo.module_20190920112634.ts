import { PhotoService } from './../../services/photo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotoAddComponent } from './components/photo-add/photo-add.component';
import { PhotoRoutingModule } from './photo.routing';
import { MaterialModule } from '@capicuarepo/material';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PhotoRoutingModule
  ],
  declarations: [PhotoListComponent, PhotoDetailsComponent, PhotoAddComponent],
  providers: [PhotoService],
  entryComponents: [PhotoAddComponent]
})
export class PhotoModule { }
