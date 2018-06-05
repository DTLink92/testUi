import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';

@Injectable()
export class ProjectService {

  public PROJECT_API = baseURL + 'projects';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    console.log('#######lista de todos los projects#####' + this.PROJECT_API);
    return this.http.get(this.PROJECT_API);
  }

  getType(id: number): Observable<any> {
    console.log('entro aqui getType service url: ' + this.PROJECT_API + '/' + id);
    return this.http.get(this.PROJECT_API + '/' + id);
  }

  save(project: any): Observable<any> {
    let result: Observable<Object>;
    if (project['id']) {
      result = this.http.put(this.PROJECT_API, project);
      console.log('ACTUALIZA CON PUT' + this.PROJECT_API, project);
    } else {
      result = this.http.post(this.PROJECT_API, project);
      console.log('CREA CON POST ' + this.PROJECT_API, project);
    }
    console.log('result de operacion' + result);

    return result;
  }

  remove(id: number) {
    const url = `${this.PROJECT_API}/${id}`;
    console.log('entro aqui remove service ' + url);
    return this.http.delete(url);
  }

  getTypeAreas(id: number): Observable<any> {
    console.log('entro aqui TipeAreaas service url: ' + this.PROJECT_API + '/areas/' + id);
    return this.http.get(this.PROJECT_API + '/areas/' + id);
  }
}
