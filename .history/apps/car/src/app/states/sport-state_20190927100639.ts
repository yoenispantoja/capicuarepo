// Section 1
import { State, Action, StateContext, Selector, Actions } from '@ngxs/store';
import { Sport } from './../models/sport'
import { AddSport, DeleteSport } from './../modules/sport/sport-actions'
import { SportService } from '../services/sport.service';
import { tap } from 'rxjs/operators';


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
  private sportService: SportService;

  @Selector()
  static getSportList(state: SportStateModel) {
    return state.sports;
  }

  @Action(GetSports) //trayendo los deportes desde el servicio
  getSports({ getState, setState }: StateContext<SportStateModel>) {
    return this.sportService.getSports().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        sports: result,
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
