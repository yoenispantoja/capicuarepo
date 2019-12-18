import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { SportService } from './sport.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin, Subject } from 'rxjs';
import { PhotoService } from './photo.service';
import { Photo } from '../models/photo';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private photos: Array<Photo>;
  observablePhotos: BehaviorSubject<Photo[]>;

  baseUrl = 'http://localhost:8000/api/photos';


  constructor(
    private photoService: PhotoService,
    private sportService: SportService,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.photos = new Array<Photo>();
    this.observablePhotos = new BehaviorSubject<Photo[]>(this.photos);
    this.observablePhotos.next(this.photos);


  }

  eventChange() {
    this.observablePhotos.next(this.photos);
  }

  getPhotos() {
    this.http.get<Photo[]>(this.baseUrl).subscribe(data => {
      this.photos = data;
      this.eventChange();
    });
  }

}
