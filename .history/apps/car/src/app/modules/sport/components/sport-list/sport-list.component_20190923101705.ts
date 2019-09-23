import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/first';
import { Sport } from '../../../../models/sport';
import { SportService } from './../../../../services/sport.service';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'capicuarepo-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css']
})
export class SportListComponent implements OnInit {

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
    private sportService: SportService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getSports();
  }

  prepareTable() {
    this.dataSource.data = this.sports;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSports(): void {
    this.subscriptionGetSport = this.sportService.getSports().subscribe(data => {
      this.sports = data['data'];
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

  }

  seeMore(sport: Sport) {

  }

  ngOnDestroy(): void {
    this.sports = [];
    this.subscriptionGetSport.unsubscribe();

  }

}
