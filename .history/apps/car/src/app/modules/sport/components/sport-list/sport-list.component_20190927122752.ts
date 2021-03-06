import { GetSports } from './../../../../../../../../.history/apps/car/src/app/modules/sport/sport-actions_20190927100627';
import { SportDetailsComponent } from '../sport-details/sport-details.component';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import 'rxjs/add/operator/first';
import { Sport } from '../../../../models/sport';
//import { SportService } from './../../../../services/sport.service';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort } from '@angular/material';
import { SportAddComponent } from '../sport-add/sport-add.component';

//Cambiando para el store
import { Store, Select } from '@ngxs/store';
import { SportState } from 'apps/car/src/app/states/sport-state';
import { DeleteSport } from '../../sport-actions';



@Component({
  selector: 'capicuarepo-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportListComponent implements OnInit {

  @Select(SportState.getSportList) sports$: Observable<Sport[]>;

  subscriptionGetSport: Subscription;
  sports: Sport[];


  //All for Table
  // Working with Material-Tables
  displayedColumns: string[] = ['id', 'nombre', 'modalidad', 'activo', 'created_at', 'updated_at', 'actions'];

  //For paginator
  dataSource = new MatTableDataSource<Sport>();

  //Paginator
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(

    private dialogAdd: MatDialog,
    private dialogDetails: MatDialog,
    private snackBar: MatSnackBar,
    private storeSports: Store

  ) {
    //this.sports$ = this.storeSports.select(state => state.sports.sports);
  }

  deleteSport(id: number) {
    this.storeSports.dispatch(new DeleteSport(id));
  }
  ngOnInit() {
    this.prepareTable();
  }

  prepareTable() {
    this.storeSports.dispatch(new GetSports());
    this.sports$.subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
      // this.sportStoreService.fetchAll();
      // this.prepareTable();

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
    dialogConfig.data = sport; //para enviar datos al modal

    this.dialogDetails.open(SportDetailsComponent, dialogConfig);
  }

  delete(sport: Sport) {
    this.storeSports.dispatch(new DeleteSport(sport.id));
    this.snackBar.open('Sport deleted', '', {
      duration: 1000,
      verticalPosition: 'top',
      panelClass: 'panelSnack'
    });
  }

  ngOnDestroy(): void {
    //this.sports = [];
    //this.subscriptionGetSport.unsubscribe();
  }






}
