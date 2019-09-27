// Section 1
import { State, Action, StateContext, Selector, Actions } from '@ngxs/store';
import { Sport } from './../models/sport'
import { AddSport, DeleteSport } from './../modules/sport/sport-actions'

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

  @Selector() //Lo usamos para utilizar las acciones de selección
  static getSports(state: SportStateModel) {
    return state.sports;
  }

  @Action(AddSport) //Lo usamos para utilizar las acciones de modificación
  AddSport(stateSport: StateContext<SportStateModel>, newSport: Sport) {
    const state = stateSport.getState();
    stateSport.setState({
      ...state,
      sports: [
        ...state.sports,
        newSport
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
