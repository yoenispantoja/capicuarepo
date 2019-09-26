import { Sport } from './models/sport';
import { ADD_SPORT, TOGGLE_SPORT, DELETE_SPORT } from './modules/sport/sport-actions';

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
  //Dependiento de la accion, devolvemos el estado correspondiente
  switch (action.type) {
    case ADD_SPORT: {
      action.sport.id = state.sports.length + 1;
      return Object.assign({}, state, {
        sports: state.sports.concat(Object.assign({}), action.sport),
        lastUpdate: new Date()
      })
    }
    case TOGGLE_SPORT: {
      let sport = state.sports.find(t => t.id === action.id);
      let index = state.sports.indexOf(sport);
      return Object.assign({}, state, {
        sports: [
          ...state.sports.slice(0, index),
          Object.assign({}, sport, { isCompleted: !sport.isCompleted }),
          ...state.sports.slice(index + 1),
        ],
        lastUpdate: new Date()
      });
    }
    case DELETE_SPORT: {
      return Object.assign({}, state, {
        sports: state.sports.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      })
    }

  }
  return state;
}
