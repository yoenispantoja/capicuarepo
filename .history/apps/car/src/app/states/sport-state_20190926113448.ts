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

export class TutorialState {

  @Selector() //Lo usamos para utilizar las acciones de selección
  static getSports(state: SportStateModel) {
    return state.sports;
  }

  @Action() //Lo usamos para utilizar las acciones de modificación
  add({ getState, patchState }: StateContext<SportStateModel>) {

  }
}
