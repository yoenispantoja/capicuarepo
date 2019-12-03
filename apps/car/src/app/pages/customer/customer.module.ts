import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';


@NgModule({
  declarations: [CustomerListComponent, CustomerDetailsComponent, CustomerAddComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  exports: [CustomerListComponent, CustomerDetailsComponent, CustomerAddComponent]
})
export class CustomerModule { }
