// Section 1
import { State, Action, StateContext, Selector, Actions } from '@ngxs/store';
import { Sport } from './../models/sport'
import { AddSport, DeleteSport, GetSports } from './../modules/sport/sport-actions'
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

  constructor(private sportService: SportService) {
  }

  @Selector() //para devolver los deportes guardados en el estado
  static getSportList(state: SportStateModel) {
    return state.sports;
  }

  @Action(GetSports) //trayendo los deportes desde el servicio
  getSports({ getState, setState }: StateContext<SportStateModel>) {
    return this.sportService.getSports().subscribe((result) => {
      const state = getState();
      setState({
        ...state,
        sports: result,
      });
    });
  }

  @Action(AddSport)
  AddSport({ getState, patchState }: StateContext<SportStateModel>, { payload }: AddSport) {
    return this.sportService.addSport(payload).pipe(tap((result) => {
      //Una vez adicionado al servicio API, traigo lo que quedó allá para actualizar el store
      this.sportService.getSports().subscribe(datos => {
        const state = getState();
        patchState({
          sports: [...state, sports: datos]
        });
      });


    }));
  }

  @Action(DeleteSport) //Lo usamos para utilizar las acciones de modificación
  deleteSport({ getState, patchState }: StateContext<SportStateModel>, { payload }: DeleteSport) {
    patchState({
      sports: getState().sports.filter(a => a.nombre != payload)
    })
  }
}
