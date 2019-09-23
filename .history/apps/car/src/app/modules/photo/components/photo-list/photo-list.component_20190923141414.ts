
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/first';
import { Photo } from '../../../../models/photo';
import { PhotoService } from './../../../../services/photo.service';
import { PhotoAddComponent } from '../photo-add/photo-add.component';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort } from '@angular/material';

import { take } from 'rxjs/operators';

@Component({
  selector: 'capicuarepo-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
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


  constructor(
    private photoService: PhotoService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  prepareTable() {
    this.dataSource.data = this.photos.slice(0, 25);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPhotos() {
    this.subscriptionGetPhoto = this.photoService.getPhotos().pipe(take(5)).subscribe(data => {
      this.photos = data;
      this.prepareTable();
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Ha ocurrido un error ', err.error.message);
        } else {
          console.log(`El servidor ha devuelto un codigo ${err.status}, con el argumento: ${err.error}`);
        }
      }
    );
  }

  addPhoto() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = '600px';
    //dialogConfig.data = user;

    this.dialog.open(PhotoAddComponent, dialogConfig);
  }

  ngOnDestroy(): void {
    this.photos = [];
    this.subscriptionGetPhoto.unsubscribe();
  }
}
