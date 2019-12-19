import { GetUsers } from './../../pages/user/user-actions';
import { GetPhotos } from './../../pages/photo/photo-actions';
import { Store, Select } from '@ngxs/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AppState } from '../../states/app-state';
import { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
import { Sport } from '../../models/sport';
import { GetSports } from '../../pages/sport/sport-actions';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo';
import { takeUntil, take } from 'rxjs/operators';
import { User } from '../../models/user';

@Component({
  selector: 'capicuarepo-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public totalPhotos: any;
  public totalSports: any;
  public totalUsers: any;

  subscriptionGetPhoto: Subscription; // para desuscribirse luego de enganchar el servicio

  @Select(AppState.getSportList) sports$: Observable<Sport[]>;
  @Select(AppState.getPhotosList) photos$: Observable<Photo[]>;
  @Select(AppState.getUsersList) users$: Observable<User[]>;



  constructor(
    private store: Store
  ) { }

  ngOnInit() {


    this.store.dispatch(new GetSports()); //Lanzo la acción y se actualiza el store
    this.sports$.subscribe(data => {
      this.totalSports = data.length;
    })

    this.store.dispatch(new GetPhotos()); //Lanzo la acción y se actualiza el store
    this.photos$.subscribe(data => {
      this.totalPhotos = data.length;
    })

    this.store.dispatch(new GetUsers()); //Lanzo la acción y se actualiza el store
    this.users$.subscribe(data => {
      this.totalUsers = data.length;
    })






  }




}
