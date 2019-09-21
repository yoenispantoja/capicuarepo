
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

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
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
} from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { PruebaComponent } from './prueba/prueba.component';

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
    MatDialog,
    MatDialogConfig,
    MatPaginator,
    MatSort,
    MatTableDataSource,
    PruebaComponent
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
    MatDialog,
    MatDialogConfig,
    MatPaginator,
    MatSort,
    MatTableDataSource,
    PruebaComponent
  ],
  declarations: [PruebaComponent]
})
export class MaterialModule { }
