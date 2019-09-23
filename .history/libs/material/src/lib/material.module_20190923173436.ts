
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
//Para formly
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';


mat

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatTableModule,
  MatSelectModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatSnackBarModule,
  MatTooltipModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions
} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};
@NgModule({
  imports: [
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatSnackBarModule,
    MatTooltipModule

  ],
  exports: [
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTooltipModule

  ],
  declarations: [],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
    // ... other providers like services
  ]
})
export class MaterialModule { }
