import { SportDetailsComponent } from '../sport-details/sport-details.component';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/first';
import { Sport } from '../../../../models/sport';
//import { SportService } from './../../../../services/sport.service';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort } from '@angular/material';
import { SportAddComponent } from '../sport-add/sport-add.component';

//Cambiando para el store
import { Store } from '@ngxs/store';
//Importando las acciones
import { AddSport } from '../../sport-actions';


@Component({
  selector: 'capicuarepo-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportListComponent implements OnInit {


  subscriptionGetSport: Subscription;
  sports: Sport[];
  prueba: any[];

  //All for Table
  // Working with Material-Tables
  displayedColumns: string[] = ['id', 'nombre', 'modalidad', 'activo', 'created_at', 'updated_at', 'actions'];

  //For paginator
  dataSource = new MatTableDataSource<Sport>();

  //Paginator
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    //private sportService: SportService,
    private storeAnimal: Store,
    private dialogAdd: MatDialog,
    private dialogDetails: MatDialog,
    private snackBar: MatSnackBar,

  ) { }

  ngOnInit() {
    // this.getSports();
  }

  prepareTable() {
    this.dataSource.data = this.sports;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*getSports(): void {
    this.sportStoreService.sports$.subscribe((data) => {
      this.sports = data;
      this.prepareTable();
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Ha ocurrido un error ', err.error.message);
        } else {
          console.log(`El servidor ha devuelto un codigo ${err.status}, con el argumento: ${err.error}`);
        }
      });

  }

  addSport() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = '600px';
    //dialogConfig.data = user;

    const ref = this.dialogAdd.open(SportAddComponent, dialogConfig);
    ref.afterClosed().subscribe(value => {
      //console.log(`Dialog sent: ${value}`);
      this.sportStoreService.fetchAll();
      //this.getSports();

    })

    //Utilizando la propagación de datos mediante el Output
    ref.componentInstance.propagar.subscribe(m => {
      console.log("Este es el evento propagado: " + m.nombre);
    });

  }

  seeMore(sport: Sport) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = sport;

    this.dialogDetails.open(SportDetailsComponent, dialogConfig);
  }

  delete(sport: Sport) {
    this.sportStoreService.deleteSport(sport.id);
    this.snackBar.open('Sport deleted', '', {
      duration: 1000,
      verticalPosition: 'top',
      panelClass: 'panelSnack'
    }).afterDismissed().subscribe(() => {
      this.getSports();
    }
    )
  }

  ngOnDestroy(): void {
    //this.sports = [];
    //this.subscriptionGetSport.unsubscribe();
  }
  */

  addAnimal() {
    let id = 3;
    let nombre = 'Badminton';
    let modalidad = 'Libre';
    let activo = "1";
    let created_at = '2019/04/05';
    let updated_at = '2019/04/05';

    // this.storeAnimal.dispatch(new AddSport(id, nombre, modalidad, activo, created_at, updated_at));
  }



}
