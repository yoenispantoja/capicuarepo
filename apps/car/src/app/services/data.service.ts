import { UserService } from './user.service';
import { SportService } from './sport.service';
import { Injectable } from '@angular/core';
import { Observable, of, forkJoin, concat } from 'rxjs';
import { PhotoService } from './photo.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(
    private photoService: PhotoService,
    private sportService: SportService,
    private userService: UserService
  ) {

  }

  getAllData(): void {

    const photos = this.photoService.getAllPhotos().subscribe();
    const sports = this.sportService.getSports().subscribe();
    const users = this.userService.getUsers().toPromise();

    console.log(users);

  }

}
