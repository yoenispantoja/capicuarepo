import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Photo } from '../models/photo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.baseUrl + 'photos');
  }


  addPhoto(photo: Photo): Observable<Photo> {
    return this.http.put<Photo>(this.baseUrl, photo, httpOptions);
  }

  deletePhoto(id: number): Observable<{}> {
    const url = `url/${id}`;
    return this.http.delete(url, httpOptions)
  }
}
