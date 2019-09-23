import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'capicuarepo-sport-add',
  templateUrl: './sport-add.component.html',
  styleUrls: ['./sport-add.component.css']
})
export class SportAddComponent implements OnInit {
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
          key: 'nombre',
          templateOptions: {
            label: 'Nombre',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'modalidad',
          templateOptions: {
            label: 'Modalidad',
          }
        },
      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          type: 'input',
          key: 'activo',
          templateOptions: {
            label: 'Activo',
          },
        }
      ]
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
