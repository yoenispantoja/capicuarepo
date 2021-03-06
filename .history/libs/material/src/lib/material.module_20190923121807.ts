
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
//Para formly
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

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
  MatTooltipModule
} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

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
  declarations: []
})
export class MaterialModule { }
