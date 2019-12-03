import { SportService } from './../../../services/sport.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { CustomerActionTypes } from './customer.actions';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private sportService: SportService
  ) { }

  @Effect()
  loadSports$ = this.actions$.pipe(
    ofType(CustomerActionTypes.LoadItems),
    mergeMap(() =>
      this.sportService.getSports().pipe(
        map(sports => {
          return { type: CustomerActionTypes.LoadSuccess, payload: sports };
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
