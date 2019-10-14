// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
// import {map} from 'rxjs/operators';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

// @Injectable()
// export class SearchService {
//   private baseUrl = 'http://localhost:8090/';
//   private url = this.baseUrl + 'api/concerts';
//   // tslint:disable-next-line: no-inferrable-types
//   queryUrl: string = '?search=';

//   constructor(private http: HttpClient) {}

//   search(terms: Observable<string>) {
//     return terms.debounceTime(400)
//       .distinctUntilChanged()
//       .switchMap(term => this.searchEntries(term));
//   }

//   searchEntries(term) {
//     return this.http
//         .get(this.baseUrl + this.url + term)
//         .map(res => res.json());
//   }
// }
