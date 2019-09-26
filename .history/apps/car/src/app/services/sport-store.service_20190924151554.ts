import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { shareReplay, map } from 'rxjs/operators'
import { uuid } from './uuid';
import { Sport } from './sport.model';
import { SportsService } from './sports.service';

@Injectable({ providedIn: 'root' })
export class SportsStoreService {


  constructor(private sportsService: SportsService) {
    this.fetchAll()
  }

  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addSport, removeSport, etc)
  // - Create one BehaviorSubject per store entity, for example if you have SportGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  private readonly _sports = new BehaviorSubject<sport[]>([]);

  // Expose the observable$ part of the _sports subject (read only stream)
  readonly sports$ = this._sports.asObservable();


  // we'll compose the sports$ observable with map operator to create a stream of only completed sports
  readonly completedSports$ = this.sports$.pipe(
    map(sports => sports.filter(sport => sport.isCompleted))
  )

  readonly uncompletedSports$ = this.sports$.pipe(
    map(sports => sports.filter(sport => !sport.isCompleted))
  )

  // the getter will return the last value emitted in _sports subject
  get sports(): Sport[] {
    return this._sports.getValue();
  }


  // assigning a value to this.sports will push it onto the observable
  // and down to all of its subsribers (ex: this.sports = [])
  set sports(val: Sport[]) {
    this._sports.next(val);
  }

  async addSport(title: string) {

    if (title && title.length) {

      // This is called an optimistic update
      // updating the record locally before actually getting a response from the server
      // this way, the interface seems blazing fast to the enduser
      // and we just assume that the server will return success responses anyway most of the time.
      // if server returns an error, we just revert back the changes in the catch statement

      const tmpId = uuid();
      const tmpSport = { id: tmpId, title, isCompleted: false };

      this.sports = [
        ...this.sports,
        tmpSport
      ];

      try {
        const sport = await this.sportsService
          .create({ title, isCompleted: false })
          .toPromise();

        // we swap the local tmp record with the record from the server (id must be updated)
        const index = this.sports.indexOf(this.sports.find(t => t.id === tmpId));
        this.sports[index] = {
          ...sport
        }
        this.sports = [...this.sports];
      } catch (e) {
        // is server sends back an error, we revert the changes
        console.error(e);
        this.removeSport(tmpId, false);
      }

    }

  }

  async removeSport(id: string, serverRemove = true) {
    // optimistic update
    const sport = this.sports.find(t => t.id === id);
    this.sports = this.sports.filter(sport => sport.id !== id);

    if (serverRemove) {
      try {
        await this.sportsService.remove(id).toPromise();
      } catch (e) {
        console.error(e);
        this.sports = [...this.sports, sport];
      }

    }

  }

  async setCompleted(id: string, isCompleted: boolean) {
    let sport = this.sports.find(sport => sport.id === id);

    if (sport) {
      // optimistic update
      const index = this.sports.indexOf(sport);

      this.sports[index] = {
        ...sport,
        isCompleted
      }

      this.sports = [...this.sports];

      try {
        await this.sportsService
          .setCompleted(id, isCompleted)
          .toPromise();

      } catch (e) {

        console.error(e);
        this.sports[index] = {
          ...sport,
          isCompleted: !isCompleted
        }
      }
    }
  }


  async fetchAll() {
    this.sports = await this.sportsService.index().toPromise();
  }

}
