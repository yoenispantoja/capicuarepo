
import { Component, OnInit, Inject } from '@angular/core';
import { SportListComponent } from '../sport-list.component';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'capicuarepo-snack-bar-delete',
  templateUrl: './snack-bar-delete.component.html',
  styleUrls: ['./snack-bar-delete.component.css']
})
export class SnackBarDeleteComponent implements OnInit {

  constructor(public snackBarRef: MatSnackBarRef<SportListComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }

  acceptDelete() {

  }

}
