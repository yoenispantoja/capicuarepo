import { ActionsUnion, CustomerActionTypes } from './customer.actions';

export const initialState = {
  customers: []
};

export function CustomerReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case CustomerActionTypes.LoadSuccess:
      return {
        ...state,
        customers: [...action.payload]
      };
    case CustomerActionTypes.AddCustomer:
      return {
        ...state,
        customers: [...state.customers, action.payload]
      };
    case CustomerActionTypes.RemoveCustomer:
      return {
        ...state,
        customers: [...state.customers.filter(item => item.nombre !== action.payload.nombre)]
      };
    default:
      return state;
  }
}
