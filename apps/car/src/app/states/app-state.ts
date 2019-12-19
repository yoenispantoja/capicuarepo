import { UserService } from './../services/user.service';
import { Photo } from './../models/photo';
import { Sport } from '../models/sport'
// Section 1
import { State, Action, StateContext, Selector, Actions } from '@ngxs/store';
import { GetSports, AddSport, DeleteSport, UpdateSport } from '../pages/sport/sport-actions'
import { GetPhotos, AddPhoto, DeletePhoto, UpdatePhoto } from '../pages/photo/photo-actions'
import { SportService } from '../services/sport.service';
import { tap } from 'rxjs/operators';
import { PhotoService } from '../services/photo.service';
import { GetUsers, AddUser, UpdateUser, DeleteUser } from '../pages/user/user-actions';
import { User } from '../models/user';


// Section 2
export class SportStateModel {
  sports: Sport[];
}

export class PhotoStateModel {
  photos: Photo[];
}

export class UserStateModel {
  users: User[];
}

// Section 3
@State<SportStateModel>({
  name: 'sports',
  defaults: {
    sports: []
  }
})

@State<PhotoStateModel>({
  name: 'photos',
  defaults: {
    photos: []
  }
})

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: []
  }
})

export class AppState {

  constructor(
    private sportService: SportService,
    private photoService: PhotoService,
    private userService: UserService
  ) {
  }

  //****************************************************************************** */
  /***************************** SPORTS MODULE************************************ */
  //****************************************************************************** */

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
  addSport({ getState, patchState }: StateContext<SportStateModel>, { payload }: AddSport) {
    //Adiciono con el servicio
    return this.sportService.addSport(payload).pipe(tap((result) => {
      //Una vez adicionado al servicio API, traigo lo que quedó allá para actualizar el store
      this.sportService.getSports().subscribe(datos => {
        const state = getState();
        patchState({
          ...state, sports: datos
        });
      });
    }));
  }

  @Action(UpdateSport) //Lo usamos para utilizar las acciones de modificación
  updateSport({ getState, patchState }: StateContext<SportStateModel>, { payload, id }: UpdateSport) {
    //Elimino desde el servicio
    return this.sportService.updateSport(payload, id).subscribe(() => {
      //Una vez actualizado al servicio API, traigo lo que quedó allá para actualizar el store
      this.sportService.getSports().subscribe(datos => {
        const state = getState();
        patchState({
          ...state, sports: datos
        });
      });
    })

  }

  @Action(DeleteSport) //Lo usamos para utilizar las acciones de modificación
  deleteSport({ getState, patchState }: StateContext<SportStateModel>, { id }: DeleteSport) {
    //Elimino desde el servicio
    return this.sportService.deleteSport(id).subscribe(() => {
      //Una vez eliminado ahora actualizo el store
      const state = getState();
      const sportsFiltrados = state.sports.filter(a => a.id !== id)
      patchState({
        ...state,
        sports: sportsFiltrados
      })
    })
  }

  /******************************************************************************************** */
  /************************ PHOTOS'S MODULES ****************************************************/
  /******************************************************************************************** */

  @Selector() //para devolver los deportes guardados en el estado
  static getPhotosList(state: PhotoStateModel) {
    return state.photos;
  }

  @Action(GetPhotos) //trayendo los deportes desde el servicio
  getPhotos({ getState, setState }: StateContext<PhotoStateModel>) {
    return this.photoService.getAllPhotos().subscribe((result) => {
      const state = getState();
      setState({
        ...state,
        photos: result,
      });
    });
  }

  @Action(AddPhoto)
  addPhoto({ getState, patchState }: StateContext<PhotoStateModel>, { payload }: AddPhoto) {
    //Adiciono con el servicio
    return this.photoService.addPhoto(payload).pipe(tap((result) => {
      //Una vez adicionado al servicio API, traigo lo que quedó allá para actualizar el store
      this.photoService.getAllPhotos().subscribe(datos => {
        const state = getState();
        patchState({
          ...state, photos: datos
        });
      });
    }));
  }

  @Action(UpdatePhoto) //Lo usamos para utilizar las acciones de modificación
  updatePhoto({ getState, patchState }: StateContext<PhotoStateModel>, { payload, id }: UpdatePhoto) {
    //Elimino desde el servicio
    return this.photoService.updatePhoto(payload, id).subscribe(() => {
      //Una vez actualizado al servicio API, traigo lo que quedó allá para actualizar el store
      this.photoService.getAllPhotos().subscribe(datos => {
        const state = getState();
        patchState({
          ...state, photos: datos
        });
      });
    })

  }

  @Action(DeletePhoto) //Lo usamos para utilizar las acciones de modificación
  deletePhoto({ getState, patchState }: StateContext<PhotoStateModel>, { id }: DeletePhoto) {
    //Elimino desde el servicio
    return this.photoService.deletePhoto(id).subscribe(() => {
      //Una vez eliminado ahora actualizo el store
      const state = getState();
      const photosFiltrados = state.photos.filter(a => a.id !== id)
      patchState({
        ...state,
        photos: photosFiltrados
      })
    })
  }


  /******************************************************************************************** */
  /************************ USERS'S MODULES ****************************************************/
  /******************************************************************************************** */

  @Selector() //para devolver los deportes guardados en el estado
  static getUsersList(state: UserStateModel) {
    return state.users;
  }

  @Action(GetUsers) //trayendo los deportes desde el servicio
  getUsers({ getState, setState }: StateContext<UserStateModel>) {
    return this.userService.getUsers().subscribe((result) => {
      const state = getState();
      setState({
        ...state,
        users: result,
      });
    });
  }

  /* @Action(AddUser)
   addUser({ getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
     //Adiciono con el servicio
     return this.userService.addUser(payload).pipe(tap((result) => {
       //Una vez adicionado al servicio API, traigo lo que quedó allá para actualizar el store
       this.userService.getUsers().subscribe(datos => {
         const state = getState();
         patchState({
           ...state, users: datos
         });
       });
     }));
   }

   @Action(UpdateUser) //Lo usamos para utilizar las acciones de modificación
   updateUser({ getState, patchState }: StateContext<UserStateModel>, { payload, id }: UpdateUser) {
     //Elimino desde el servicio
     return this.userService.updateUser(payload, id).subscribe(() => {
       //Una vez actualizado al servicio API, traigo lo que quedó allá para actualizar el store
       this.userService.getUsers().subscribe(datos => {
         const state = getState();
         patchState({
           ...state, users: datos
         });
       });
     })

   }

   @Action(DeleteUser) //Lo usamos para utilizar las acciones de modificación
   deleteUser({ getState, patchState }: StateContext<UserStateModel>, { id }: DeleteUser) {
     //Elimino desde el servicio
     return this.userService.deleteUser(id).subscribe(() => {
       //Una vez eliminado ahora actualizo el store
       const state = getState();
       const usersFiltrados = state.users.filter(a => a.id !== id)
       patchState({
         ...state,
         users: usersFiltrados
       })
     })
   }
   */
}
