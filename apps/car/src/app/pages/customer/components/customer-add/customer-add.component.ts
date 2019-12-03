import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'apps/car/src/app/models/customer';
import { select, Store } from '@ngrx/store';
import { CustomerAdd } from '../../store/customer.actions';

@Component({
  selector: 'capicuarepo-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customers: Observable<Customer[]>;
  constructor(private store: Store<{ customers: Customer[] }>) {
    this.customers = store.pipe(select('customers'));
  }

  AddCustomer(customerName: string) {
    const customer = new Customer();
    customer.nombre = customerName;
    this.store.dispatch(new CustomerAdd(customer));
  }

  ngOnInit() { }

}
