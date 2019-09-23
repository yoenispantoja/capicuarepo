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

  constructor(private sportService: SportService) { }

  ngOnInit() {
    this.getSports();
  }

  getSports(): void {
    this.subscriptionGetSport = this.sportService.getSports().subscribe(data => this.sports = data['data'])
  }

}
