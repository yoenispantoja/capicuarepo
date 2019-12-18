import { Store, Select } from '@ngxs/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SportState } from '../../states/sport-state';
import { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
import { Sport } from '../../models/sport';
import { GetSports } from '../../pages/sport/sport-actions';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo';
import { takeUntil, take } from 'rxjs/operators';

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

  @Select(SportState.getSportList) sports$: Observable<Sport[]>;

  constructor(
    private serviceData: DataService,
    private photoService: PhotoService,
    private storeSports: Store
  ) { }

  ngOnInit() {

    this.serviceData.observablePhotos
      .subscribe(result => this.totalPhotos = result.length);

    this.storeSports.dispatch(new GetSports()); //Lanzo la acción y se actualiza el store
    this.sports$.subscribe(data => {
      this.totalSports = data.length;
    })



  }

  actualizar() {
    this.photoService.getAllPhotos()
      .subscribe(result => this.totalPhotos = result.length);
  }



}
