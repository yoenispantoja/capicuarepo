import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

  private sport$ = new Subject<Sport[]>();

  baseUrl = 'http://localhost/jd/public/deportes';

  constructor(private http: HttpClient) { }

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.baseUrl);
  }

  getSports$(): Observable<Sport[]> {
    this.sport$.next(this.http.get<Sport[]>(this.baseUrl).subscribe((data) => { return data['data'] };));
    return this.sport$.asObservable();
  }



  addSport(sport: Sport): Observable<Sport> {
    //generamos el evento con el subject
    return this.http.post<Sport>(this.baseUrl, sport, httpOptions);
  }

  deleteSport(id: number): Observable<{}> {
    return this.http.delete(this.baseUrl + '/' + id, httpOptions)
  }

}
