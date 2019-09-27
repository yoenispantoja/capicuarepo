import { Component, OnInit } from '@angular/core';
import { SportsStoreService } from 'apps/car/src/app/services/sport-store.service';
import { Router } from '@angular/router';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Store } from '@ngxs/store';

@Component({
  selector: 'capicuarepo-sport-edit',
  templateUrl: './sport-edit.component.html',
  styleUrls: ['./sport-edit.component.css']
})
export class SportEditComponent implements OnInit {

  constructor(
    // private sportService: SportService,
    private sportStoreService: SportsStoreService,
    private router: Router,
    public dialogRef: MatDialogRef<SportEditComponent>,
    private snackBar: MatSnackBar,
    private storeSport: Store
  ) { }

  ngOnInit() {
  }

  submit() {
    const modelo = this.model;
    //this.sportStoreService.addSport(modelo);
    this.storeSport.dispatch(new AddSport(modelo));
    this.propagar.emit(modelo);

    //Cargando el snack para el mensajito
    this.snackBar.open('Sport added', '', {
      duration: 1000
    }).afterDismissed().subscribe(() => {
      this.dialogRef.close();
      this.router.navigate(['/sport']);
    }
    );



  }

}
