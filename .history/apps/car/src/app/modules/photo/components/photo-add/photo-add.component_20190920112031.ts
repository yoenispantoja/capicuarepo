import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'capicuarepo-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.css']
})
export class PhotoAddComponent implements OnInit {

  constructor(
    // required to pass data into dialog component
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
