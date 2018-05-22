import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';

@Injectable()
export class PositionService {

  public POSITION_API = baseURL + 'positions';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',

    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.POSITION_API);
  }

  getType(id: number): Observable<any> {
    return this.http.get(this.POSITION_API + '/' + id);
  }

  save(position: any): Observable<any> {
    let result: Observable<Object>;
    if (position['id']) {
      result = this.http.put(this.POSITION_API, position);
    } else {
      result = this.http.post(this.POSITION_API, position);
    }
    return result;
  }

  remove(id) {
    const url = `${this.POSITION_API}/${id}`;
    console.log('entro aqui remove service ' + url);
    return this.http.delete( url);
  }
}
