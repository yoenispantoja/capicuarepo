import { AddPhoto } from './../../photo-actions';

import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { PhotoService } from '../../../../services/photo.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngxs/store';

@Component({
  selector: 'capicuarepo-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PhotoAddComponent implements OnInit {
  subscriptionGetPhotos: Subscription; // para desuscribirse luego de enganchar el servicio

  photos: any;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          type: 'input',
          key: 'title',
          templateOptions: {
            label: 'Title',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'url',
          templateOptions: {
            label: 'Url',
          }
        },
      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'avatar',
          templateOptions: {
            label: 'Avatar',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'albumId',
          templateOptions: {
            label: 'AlbumId',
          },
        }
      ]
    }

  ];
  constructor(
    // required to pass data into dialog component
    @Inject(MAT_DIALOG_DATA) public data: any,
    private photoService: PhotoService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<PhotoAddComponent>,
    private store: Store
  ) { }



  ngOnInit() {


  }

  ngOnDestroy(): void {
    this.photos = [];
    //this.subscriptionGetPhotos.unsubscribe();
  }

  submit() {
    let modelo = this.model;
    const rndNum = Date.now();
    modelo['thumbnailUrl'] = `https://api.adorable.io/avatars/285/${rndNum}`;
    this.store.dispatch(new AddPhoto(modelo));
    //Cargando el snack para el mensajito
    this.snackBar.open('Photo is added succesfully', '', {
      duration: 3000
    })
    this.dialogRef.close();

  }

}
