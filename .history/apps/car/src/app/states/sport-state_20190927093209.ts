// Section 1
import { State, Action, StateContext, Selector, Actions } from '@ngxs/store';
import { Sport } from './../models/sport'
import { AddSport, DeleteSport } from './../modules/sport/sport-actions'
import { SportService } from '../services/sport.service';


// Section 2
export class SportStateModel {
  sports: Sport[];
}

// Section 3
@State<SportStateModel>({
  name: 'sports',
  defaults: {
    sports: []
  }
})

export class SportState {

  constructor(sportService: SportService) {

  }

  @Selector() //Lo usamos para utilizar las acciones de selección
  static getSports(state: SportStateModel) {
    //Consumo los deportes desde el servicio
    this.sportService.
    return state.sports;
  }

  @Action(AddSport) //Lo usamos para utilizar las acciones de modificación
  AddSport(stateSport: StateContext<SportStateModel>, { payload }: AddSport) {
    const state = stateSport.getState();
    stateSport.setState({
      ...state,
      sports: [
        ...state.sports,
        payload
      ]
    });
  }
  /*addSport({ getState, patchState }: StateContext<SportStateModel>, { payload }: AddSport) {
    const state = getState();
    patchState({
      sports: [...state.sports, payload]
    })
  }*/

  @Action(DeleteSport) //Lo usamos para utilizar las acciones de modificación
  deleteSport({ getState, patchState }: StateContext<SportStateModel>, { payload }: DeleteSport) {
    patchState({
      sports: getState().sports.filter(a => a.nombre != payload)
    })
  }
}
