import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AccidentTypeService {
  public API = '//localhost:8080';
  public ACIDENTTYPE_API = this.API + '/accidentTypes';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    })
  };
  getAll(): Observable<any> {
    return this.http.get(this.ACIDENTTYPE_API);
  }

  getType(id: number): Observable<any> {
    return this.http.get(this.ACIDENTTYPE_API + '/' + id);
  }
  save(accidentType: any): Observable<any> {
    let result: Observable<object>;
    if (accidentType['id']) {
      result = this.http.put(this.ACIDENTTYPE_API, accidentType);
    }  else {
      result = this.http.post(this.ACIDENTTYPE_API, accidentType);
    }
    return result;
  }
  remove(id) {
    const url = `${this.ACIDENTTYPE_API}/${id}`;
    console.log('verficando res ' + url);
    return this.http.delete( url);
  }
}
