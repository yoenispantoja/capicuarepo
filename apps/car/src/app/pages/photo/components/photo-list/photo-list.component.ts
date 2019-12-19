import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, of, pipe, Observable } from 'rxjs';
import { Photo } from '../../../../models/photo';
import { PhotoService } from './../../../../services/photo.service';
import { PhotoAddComponent } from '../photo-add/photo-add.component';
import { MatTableDataSource, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort } from '@angular/material';
import { enterAnimation, enterLeaveAnimation } from '@capicuarepo/utiles';
import { SnackBarDeleteComponent } from 'apps/car/src/app/shared/snack-bar-delete/snack-bar-delete.component';

//Cambiando para el store
import { Store, Select } from '@ngxs/store';
import { AppState } from 'apps/car/src/app/states/app-state';
import { DeletePhoto, GetPhotos, UpdatePhoto } from '../../photo-actions';

@Component({
  selector: 'capicuarepo-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  animations: [enterAnimation, enterLeaveAnimation]
})
export class PhotoListComponent implements OnInit {

  @Select(AppState.getPhotosList) photos$: Observable<Photo[]>;

  photos: Photo[];
  subscriptionGetPhoto: Subscription; // para desuscribirse luego de enganchar el servicio

  //All for Table
  // Working with Material-Tables
  displayedColumns: string[] = ['id', 'title', 'albumId', 'url', 'thumbnailUrl', 'actions'];

  //For paginator
  dataSource = new MatTableDataSource<Photo>();

  //Paginator
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  fieldExposed: boolean;

  total: number;

  constructor(
    private photoService: PhotoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private store: Store
  ) { }

  ngOnInit() {
    this.prepareTable();
    this.fieldExposed = true;
  }

  prepareTable() {
    this.store.dispatch(new GetPhotos()); //Lanzo la acción y se actualiza el store
    this.photos$.subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  addPhoto() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = '600px';
    //dialogConfig.data = user;

    this.dialog.open(PhotoAddComponent, dialogConfig);
  }


  seeMore(row: any) {
    console.table(row);
  }

  deletePhoto(id: number) {
    let config: MatSnackBarConfig = {
      verticalPosition: 'top',
      panelClass: 'panelSnack'
    }
    this.snackBar.openFromComponent(SnackBarDeleteComponent, {
      data: {
        id: id,
        model: 'photo'
      },
      ...config
    }).afterDismissed().subscribe(() => {
      this.fieldExposed = false;
    });

  }

  stripper(index: number): string {
    return (index % 2 === 0) ? 'stripper' : 'none';
  }
}
