import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Posts} from './posts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
     private http: HttpClient
  ) { }

  private API_URL = 'https://jsonplaceholder.typicode.com';

  private IMAG_URL = 'https://picsum.photos/seed';

  getPosts(): Observable<any> {
     return this.http.get(`${this.API_URL}/posts`)
        .pipe(map((response ) => {
           return Object.values(response).map((item, index) => ({
              ...item,
              thumbnailUrl: `${this.IMAG_URL}/${index}/200/200`,
              url: `${this.IMAG_URL}/${index}/800/480`
           }));
        }));
  }
}
