import { SportService } from './../../../../services/sport.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'capicuarepo-sport-add',
  templateUrl: './sport-add.component.html',
  styleUrls: ['./sport-add.component.css'],
  // encapsulation: ViewEncapsulation.None,
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
  constructor(
    private sportService: SportService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  submit() {
    const modelo = this.model;
    this.sportService.addSport(modelo).subscribe(data => {
      console.log('Done');
      this.form.reset();
      this.router.navigate(['/']);
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

  }

}
