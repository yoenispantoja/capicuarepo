import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Sport } from '../models/sport';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SportService {

  baseUrl = 'http://localhost:8000/deportes';

  constructor(private http: HttpClient) { }

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.baseUrl);
  }


  addSport(sport: Sport): Observable<Sport> {
    return this.http.put<Sport>(this.baseUrl, sport, httpOptions);
  }

  deleteSport(id: number): Observable<{}> {
    const url = `url/${id}`;
    return this.http.delete(url, httpOptions)
  }

}
