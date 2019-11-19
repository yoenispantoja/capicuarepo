import { SportAddComponent } from './components/sport-add/sport-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportListComponent } from './components/sport-list/sport-list.component';
import { SportDetailsComponent } from './components/sport-details/sport-details.component';
import { SportRoutingModule } from './sport-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MaterialModule } from '@capicuarepo/material';
import { SportService } from '../../services/sport.service';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
  ],
  declarations: [SportListComponent, SportDetailsComponent, SportAddComponent],
  providers: [SportService],
  entryComponents: [SportAddComponent]
})
export class SportModule { }