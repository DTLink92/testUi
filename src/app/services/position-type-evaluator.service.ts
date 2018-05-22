import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';

@Injectable()
export class PositionTypeEvaluatorService {

  public TYPE_API = baseURL + 'typeEvaluators';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.TYPE_API);
  }

  getType(id: number): Observable<any> {
    return this.http.get(this.TYPE_API + '/' + id);
  }

  save(type: any): Observable<any> {
    let result: Observable<Object>;
    if (type['id']) {
      result = this.http.put(this.TYPE_API, type);
    } else {
      result = this.http.post(this.TYPE_API, type);
    }
    return result;
  }

  remove(id: string) {
    return this.http.delete(this.TYPE_API + '/' + id);
  }
}
