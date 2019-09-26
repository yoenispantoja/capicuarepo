import { Sport } from './models/sport';
import { ADD_SPORT, DELETE_SPORT } from './modules/sport/sport-actions';

//Declarando la interfaz general del estado de la App
export interface IAppState {
  sports: Sport[];
  lastUpdate: Date;
}

//Declarando el estado inicial
export const INITIAL_STATE: IAppState = {
  sports: [],
  lastUpdate: null
}

//Exportando el reducer principal
export function rootReducer(state, action) {
  return state
}
