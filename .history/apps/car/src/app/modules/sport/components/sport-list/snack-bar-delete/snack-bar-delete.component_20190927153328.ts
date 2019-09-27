
import { Component, OnInit, Inject } from '@angular/core';
import { SportListComponent } from '../sport-list.component';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';
import { DeleteSport } from '../../../sport-actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'capicuarepo-snack-bar-delete',
  templateUrl: './snack-bar-delete.component.html',
  styleUrls: ['./snack-bar-delete.component.css']
})
export class SnackBarDeleteComponent implements OnInit {

  constructor(
    public snackBarRef: MatSnackBarRef<SportListComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBar: MatSnackBar,
    private storeSports: Store
  ) { }

  ngOnInit() {
  }

  acceptDelete() {
    this.data
    this.storeSports.dispatch(new DeleteSport(this.data.id));
    this.snackBar.open('Sport deleted', '', {
      duration: 1000,
      verticalPosition: 'top',
      panelClass: 'panelSnack'
    });
  }

}
