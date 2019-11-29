import { SportAddComponent } from './components/sport-add/sport-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportListComponent } from './components/sport-list/sport-list.component';
import { SportDetailsComponent } from './components/sport-details/sport-details.component';
import { SportEditComponent } from './components/sport-edit/sport-edit.component';
import { SportRoutingModule } from './sport-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MaterialModule } from '@capicuarepo/material';
import { SportService } from '../../services/sport.service';
import { FormlyModule } from '@ngx-formly/core';
import { SnackBarDeleteComponent } from './components/sport-list/snack-bar-delete/snack-bar-delete.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '../../../../../../libs/ng-pick-datetime';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' }
      ],
    }),
    FormlyMaterialModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule

  ],
  declarations: [SportListComponent, SportDetailsComponent, SportAddComponent, SportEditComponent, SnackBarDeleteComponent],
  providers: [SportService],
  entryComponents: [SportAddComponent, SportEditComponent, SnackBarDeleteComponent]
})
export class SportModule { }
