import { Customer } from 'apps/car/src/app/models/customer';
import { Action } from '@ngrx/store';

export enum CustomerActionTypes {
  AddCustomer = '[Customer Component] Add',
  RemoveCustomer = '[Customer Component] Remove',
  LoadItems = '[Customer Component] Load items from server',
  LoadSuccess = '[Customer Component] Load success'

}

export class CustomerAdd implements Action {
  readonly type = CustomerActionTypes.AddCustomer;
  constructor(public payload: Customer) {
  }
}

export class GetCustomers implements Action {
  readonly type = CustomerActionTypes.LoadItems;
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LoadSuccess;
  constructor(public payload: Customer[]) { }
}

export class CustomerRemove implements Action {
  readonly type = CustomerActionTypes.RemoveCustomer;
  constructor(public payload: Customer) {
  }
}

export type ActionsUnion = CustomerAdd | CustomerRemove | GetCustomers | LoadCustomers;
