import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from '../car/components/car-details/car-details.component';
import { CarRoutingModule } from '../car/car.routing';
import { StarwarsService } from '../../services/starwars.service';
import { MaterialModule } from '@capicuarepo/material';
import { MaterialModule } from '@capicuarepo/shared';

@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule,
    MaterialModule

  ],
  declarations: [
    CarComponent,
    CarDetailsComponent
  ],
  providers: [
    StarwarsService
  ]
})
export class CarModule { }
