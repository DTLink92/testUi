import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';

@Injectable()
export class AreaService {
  public PROJECT_API = baseURL + 'areas';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    console.log('#######lista de todos las Areas#####' + this.PROJECT_API);
    return this.http.get(this.PROJECT_API);
  }
  getType (id: number): Observable<any> {
    console.log('entro aqui getType service url: ' + this.PROJECT_API + '/' + id);
    return this.http.get(this.PROJECT_API + '/' + id);
  }
  save(area: any): Observable<any> {
    let result: Observable<Object>;
    if ( area['id']) {
      result = this.http.put(this.PROJECT_API, area);
      console.log('ACTUALIZA CON PUT' + this.PROJECT_API, area);
    } else {
      result = this.http.post(this.PROJECT_API, area);
      console.log('CREA CON POST ' + this.PROJECT_API, area);
    }
    console.log('result de operacion' + result);

    return result;
  }
  remove(id: number) {
    const url = `${this.PROJECT_API}/${id}`;
    console.log('entro aqui remove service ' + url);
    return this.http.delete( url);
  }

}
