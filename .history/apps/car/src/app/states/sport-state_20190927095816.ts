// Section 1
import { State, Action, StateContext, Selector, Actions } from '@ngxs/store';
import { Sport } from './../models/sport'
import { AddSport, DeleteSport } from './../modules/sport/sport-actions'
import { SportService } from '../services/sport.service';


// Section 2
export class SportStateModel {
  sports: Sport[];
  constructor(sportService: SportService) {

  }
}

// Section 3
@State<SportStateModel>({
  name: 'sports',
  defaults: {
    sports: []
  }
})

export class SportState {
  private sportService: SportService;


  @Action(GetTodos)
  getTodos({ getState, setState }: StateContext<SportStateModel>) {
    return this.sportService.getSports().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        todos: result,
      });
    }));
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
