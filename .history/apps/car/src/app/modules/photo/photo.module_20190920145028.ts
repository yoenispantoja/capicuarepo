import { FlexLayoutModule } from '@angular/flex-layout';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { PhotoService } from './../../services/photo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotoAddComponent } from './components/photo-add/photo-add.component';
import { PhotoRoutingModule } from './photo.routing';
import { MaterialModule } from '@capicuarepo/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PhotoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    FlexLayoutModule

  ],
  declarations: [PhotoListComponent, PhotoDetailsComponent, PhotoAddComponent],
  providers: [PhotoService],
  entryComponents: [PhotoAddComponent]
})
export class PhotoModule { }
