import { UpdateSport } from './../../sport-actions';
import { Component, OnInit, Inject } from '@angular/core';
import { SportsStoreService } from 'apps/car/src/app/services/sport-store.service';
import { Router } from '@angular/router';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Store } from '@ngxs/store';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'capicuarepo-sport-edit',
  templateUrl: './sport-edit.component.html',
  styleUrls: ['./sport-edit.component.css']
})
export class SportEditComponent implements OnInit {

  //atributos
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
          defaultValue: this.data.nombre,
          key: 'nombre',
          templateOptions: {
            label: 'Nombre',
            placeholder: "Nombre del deporte",
            required: true,

          },
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'codigo',
          defaultValue: this.data.codigo,
          templateOptions: {
            label: 'Código',
            type: 'number',
            minLength: 6,
            required: true,
          },
        }

      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          defaultValue: this.data.modalidad,
          key: 'modalidad',
          templateOptions: {
            placeholder: 'Modalidad',
            label: 'Modalidad',
            required: true
          }
        },
        {
          className: 'flex-2',
          type: 'select',
          defaultValue: this.data.activo,
          key: 'activo',
          templateOptions: {
            label: 'Activo',
            placeholder: 'Seleccione',
            required: true,
            options: [
              { value: 1, label: 'Activo' },
              { value: 0, label: 'Inactivo' }
            ],
          },
        },
        {
          className: 'display-none',
          type: 'input',
          key: 'id',
          defaultValue: this.data.id
        }
      ]
    }

  ];

  constructor(
    // private sportService: SportService,
    private sportStoreService: SportsStoreService,
    private router: Router,
    public dialogRef: MatDialogRef<SportEditComponent>,
    private snackBar: MatSnackBar,
    private storeSport: Store,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  submit() {
    const modelo = this.model;
    //this.sportStoreService.addSport(modelo);
    this.storeSport.dispatch(new UpdateSport(modelo, this.data.id));

    //Cargando el snack para el mensajito
    this.snackBar.open('Sport updated', '', {
      duration: 1000
    }).afterDismissed().subscribe(() => {
      this.dialogRef.close();
      this.router.navigate(['/sport']);
    }
    );



  }

}
