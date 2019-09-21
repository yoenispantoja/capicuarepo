
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { PhotoService } from '../../../../services/photo.service';

import { Subscription } from 'rxjs';
import { Photo } from 'apps/car/src/app/models/photo';
import { HttpErrorResponse } from '@angular/common/http';

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
    @Inject(MAT_DIALOG_DATA) public data: any, private photoService: PhotoService) { }



  ngOnInit() {


  }

  ngOnDestroy(): void {
    this.photos = [];
    //this.subscriptionGetPhotos.unsubscribe();
  }

  submit() {
    let modelo = this.model;
    /*let photo: Photo;

    photo.id = 5;
    photo.albumId = modelo['albumId'];
    photo.title = modelo['title'];
    photo.url = modelo['url']
    photo.thumbnailUrl = modelo['thumbnailUrl'];*/
    console.log(modelo['title']);
    this.photoService.addPhoto(modelo).subscribe(data => {
      console.log('Done')
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Ha ocurrido un error ', err.error.message);
        }
        else {
          console.log(`El servidor ha devuelto un codigo ${err.status}, con el argumento: ${err.error}`);
        }
      }
    );
    alert(JSON.stringify(this.model));
  }

}
