import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'capicuarepo-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.css']
})
export class PhotoAddComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [

    {
      className: 'flex',
      type: 'input',
      key: 'title',
      templateOptions: {
        label: 'Title',
      },
    },
    {
      className: 'flex',
      type: 'input',
      key: 'albumId',
      templateOptions: {
        label: 'Album number',
      },
      expressionProperties: {
        'templateOptions.disabled': '!model.title',
      },
    },

    {
      className: 'flex',
      type: 'input',
      key: 'url',
      templateOptions: {
        label: 'Url',
      },
    },
    {
      className: 'flex',
      type: 'input',
      key: 'avatar',
      templateOptions: {
        label: 'Avatar',
      },
    }

  ];
  constructor(
    // required to pass data into dialog component
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
