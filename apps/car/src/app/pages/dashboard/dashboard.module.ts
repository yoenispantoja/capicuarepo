import { MaterialModule } from '@capicuarepo/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
