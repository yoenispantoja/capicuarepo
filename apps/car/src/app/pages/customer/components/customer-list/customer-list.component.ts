
import { Component, OnInit } from '@angular/core';
import { Customer } from 'apps/car/src/app/models/customer';

import { select, Store } from '@ngrx/store';
import { GetCustomers, CustomerRemove } from '../../store/customer.actions';


@Component({
  selector: 'capicuarepo-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(private store: Store<{ customers: Customer[] }>) {
    store.pipe(select('customers')).subscribe(data => {
      this.customers = data.customers;
    });
  }

  removeCustomer(customerIndex) {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

  ngOnInit() {
    this.store.dispatch(new GetCustomers());
  }

}
