import { DeletePhoto } from './../../pages/photo/photo-actions';

import { Component, OnInit, Inject } from '@angular/core';
import { SportListComponent } from '../../pages/sport/components/sport-list/sport-list.component';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';
import { DeleteSport } from '../../pages/sport/sport-actions';
import { Store } from '@ngxs/store';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'capicuarepo-snack-bar-delete',
  templateUrl: './snack-bar-delete.component.html',
  styleUrls: ['./snack-bar-delete.component.scss']
})
export class SnackBarDeleteComponent implements OnInit {

  model: string;

  constructor(
    public snackBarRef: MatSnackBarRef<SportListComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBar: MatSnackBar,
    private storeSports: Store,
    private servicePhoto: PhotoService
  ) { }

  ngOnInit() {
    this.model = this.data.model;
  }

  acceptDelete() {
    switch (this.data.model) {
      case 'sport': {
        this.storeSports.dispatch(new DeleteSport(this.data.id));
      }
        break;
      case 'photo': {
        this.storeSports.dispatch(new DeletePhoto(this.data.id));
      }
        break;
    }
    this.snackBar.open('The ' + this.data.model + ' has been deleted', '', {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: 'panelSnack'
    });
  }

  setIcon(): string {
    switch (this.data.model) {
      case 'sport': {
        return 'mood';
      }
      case 'photo': {
        return 'photo';
      }
    }
  }

}
