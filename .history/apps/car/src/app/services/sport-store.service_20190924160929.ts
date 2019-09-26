import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { shareReplay, map } from 'rxjs/operators'
import { Sport } from '../models/sport';
import { SportService } from '../services/sport.service';

@Injectable({ providedIn: 'root' })

export class SportsStoreService {


  constructor(private sportsService: SportService) {
    //cargo todos los deportes desde el getIndex del servicio
    this.fetchAll()
  }

  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addSport, removeSport, etc)
  // - Create one BehaviorSubject per store entity, for example if you have SportGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  private readonly _sports = new BehaviorSubject<Sport[]>([]);

  // Expose the observable$ part of the _sports subject (read only stream)
  readonly sports$ = this._sports.asObservable();

  // we'll compose the sports$ observable with map operator to create a stream of only active sports
  readonly activeSports$ = this.sports$.pipe(
    map(sports => sports.filter(sport => sport.activo))
  )

  readonly unactiveSports$ = this.sports$.pipe(
    map(sports => sports.filter(sport => !sport.activo))
  )

  // the getter will return the last value emitted in _sports subject
  getSports(): Sport[] {
    console.log(this._sports.getValue());
    return this._sports.getValue()['data'];
  }

  // assigning a value to this.sports will push it onto the observable
  // and down to all of its subsribers (ex: this.sports = [])
  setSports(val: Sport[]) {
    this._sports.next(val);
  }

  /* async addSport(sport: Sport) {

     // This is called an optimistic update
     // updating the record locally before actually getting a response from the server
     // this way, the interface seems blazing fast to the enduser
     // and we just assume that the server will return success responses anyway most of the time.
     // if server returns an error, we just revert back the changes in the catch statement

     //lo guardo en el store
     this.sports = [
       ...this.sports,
       sport
     ];

     //lo guardo en el servicio mediante el post normal
     try {
       this.sportsService.addSport(sport);
       this.sports = [...this.sports];
     } catch (e) {
       // is server sends back an error, we revert the changes
       console.error(e);
     }

   }

   async deleteSport(id: number) {
     // borrandolo del store
     const sport = this.sports.find(t => t.id === id);
     this.sports = this.sports.filter(sport => sport.id !== id);

     //y ahora del servicio
     try {
       await this.sportsService.deleteSport(id).toPromise();
     } catch (e) {
       console.error(e);
       this.sports = [...this.sports, sport];
     }

   }*/

  fetchAll() {
    this.sportsService.getSports().subscribe((data) => {
      console.log(data);
      this.setSports(data['data']);
      //this.sports = data;

    });
  }



}
