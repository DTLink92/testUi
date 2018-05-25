import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';

@Injectable()
export class ProjectService {

  public PROJECT_API = baseURL + 'projects';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) {
    }
  getAll(): Observable<any> {
    return this.http.get(this.PROJECT_API);
  }
  getType (id: number): Observable<any> {
     console.log('entro aqui getType service url: ' + this.PROJECT_API + '/' + id);
     return this.http.get(this.PROJECT_API + '/' + id);
  }
  save(project: any): Observable<any> {
    let result: Observable<Object>;
    if ( project['id']) {
      result = this.http.put(this.PROJECT_API, project);
      console.log('entro aqui save service ' + this.PROJECT_API, project);
    } else {
      result = this.http.post(this.PROJECT_API, project);
      console.log('entro aqui post save service ' + this.PROJECT_API, project);
    }
    return result;
  }
  remove(id) {
    const url = `${this.PROJECT_API}/${id}`;
    console.log('entro aqui remove service ' + url);
    return this.http.delete( url);
  }

}

