
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/first';
import { Photo } from '../../../../models/photo';
import { PhotoService } from './../../../../services/photo.service';
import { PhotoDetailsComponent } from '../photo-details/photo-details.component';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort } from '@angular/material';

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
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar', 'actions'];

  //For paginator
  dataSource = new MatTableDataSource<Photo>();

  //Paginator
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(
    private photoService: PhotoService,
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.subscriptionGetPhoto = this.photoService.getPhotos().subscribe(data => {
      this.photos = data;
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
}
