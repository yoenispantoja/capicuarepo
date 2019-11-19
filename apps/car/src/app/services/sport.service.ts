import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Sport } from '../models/sport';

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
export class SportService {

  baseUrl = 'http://localhost:8000/api/sports';

  constructor(private http: HttpClient) { }

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.baseUrl);
  }

  updateSport(sport: Sport, id: number): Observable<Sport> {
    return this.http.put<Sport>(this.baseUrl + '/' + id, sport);
  }

  addSport(sport: Sport): Observable<Sport> {
    return this.http.post<Sport>(this.baseUrl, sport, httpOptions);
  }

  deleteSport(id: number): Observable<{}> {
    return this.http.delete(this.baseUrl + '/' + id, httpOptions)
  }

}
