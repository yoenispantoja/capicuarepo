import { Photo } from './../models/photo';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  baseUrl = 'http://localhost:8000/api/photos';

  private _photos = new BehaviorSubject<Photo[]>([]);
  private photos$ = this._photos.asObservable();

  constructor(private http: HttpClient) { }

  get photos(): Photo[] {
    return this._photos.getValue();
  }

  set photos(val: Photo[]) {
    this._photos.next(val);
  }

  private loadPhotos() {
    this.http.get<Photo[]>(this.baseUrl).subscribe(data => {
      this.photos = data;
    });
  }

  getAllPhotos(): Observable<Photo[]> {
    this.loadPhotos();
    return this.photos$;
  }

  addPhoto(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(this.baseUrl, photo, httpOptions).pipe(
      tap(() => {
        this.loadPhotos(); //lleno el subject con los datos actualizados lugo de la inserción
      })
    );
  }

  updatePhoto(photo: Photo, id: number): Observable<Photo> {
    return this.http.put<Photo>(this.baseUrl + '/' + id, photo).pipe(
      tap(() => {
        this.loadPhotos(); //lleno el subject con los datos actualizados lugo de la inserción
      })
    );
  }

  deletePhoto(id: number): Observable<{}> {
    const url = this.baseUrl + `/${id}`;
    return this.http.delete(url, httpOptions).pipe(
      tap(() => {
        this.loadPhotos(); //lleno el subject con los datos actualizados lugo de la inserción
      })
    );
  }
}
