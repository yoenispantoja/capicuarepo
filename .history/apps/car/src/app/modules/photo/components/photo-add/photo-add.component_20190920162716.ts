import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { PhotoService } from 'apps/car/src/app/services/photo.service';


@Component({
  selector: 'capicuarepo-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PhotoAddComponent implements OnInit {
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
            options: this.photos,
            valueProp: 'id',
            labelProp: 'AlbumId',
          },
        }
      ]
    }

  ];
  constructor(
    // required to pass data into dialog component
    @Inject(MAT_DIALOG_DATA) public data: any, private photoService: PhotoService) { }

  loadAlbumIds() {
    this.photoService.getPhotos().subscribe(data => {
      this.photos = data;
    })
  }

  ngOnInit() {
  }

}
