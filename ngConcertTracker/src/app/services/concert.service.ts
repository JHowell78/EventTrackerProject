import { Concert } from './../models/concert';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  private baseUrl = 'http://localhost:8090/';
  private url = this.baseUrl + 'api/concerts';


  constructor(private http: HttpClient) {}

  public index() {
    return this.http.get<Concert[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error getting Concert list');
      })
    );
  }
  public create(concert: Concert) {
    const httpOptions = {};
    return this.http.post<Concert>(this.url, concert, httpOptions);
  }
  update(concert: Concert) {
    // const  httpOptions = { };
    return this.http.put<Concert>(this.url + '/' + concert.id, concert);
  }
  delete(id: number) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error in Concert delete()');
      })
    );
  }
searchKey(keyword: string) {
  // tslint:disable-next-line: quotemark
  return this.http.get<Concert[]>(this.url + "/search/" + keyword).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('Error getting Concert list');
    })
  );
}
  // end of class
}
