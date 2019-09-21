
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { PhotoService } from '../../../../services/photo.service';
import { DataService } from '../../../../services/data.service';

import { Subscription } from 'rxjs';

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
          type: 'select',
          key: 'albumId',
          templateOptions: {
            options: this.photoService.getPhotos(),
            valueProp: 'id',
            labelProp: 'avatar',
          },
        }
      ]
    }

  ];
  constructor(
    // required to pass data into dialog component
    @Inject(MAT_DIALOG_DATA) public data: any, private photoService: PhotoService, private dataService: DataService) { }

  loadAlbumIds() {
    this.subscriptionGetPhotos = this.photoService.getPhotos().subscribe(data => {
      this.photos = data;
      console.log(this.photos);
    })
  }

  ngOnInit() {
    this.loadAlbumIds();

  }

  ngOnDestroy(): void {
    this.photos = [];
    this.subscriptionGetPhotos.unsubscribe();
  }

}
