import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'capicuarepo-sport-details',
  templateUrl: './sport-details.component.html',
  styleUrls: ['./sport-details.component.css']
})
export class SportDetailsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
