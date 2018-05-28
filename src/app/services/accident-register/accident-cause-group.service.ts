import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AccidentCauseGroupService {
  public API = '//localhost:8080';
  public ACIDENTCAUSEGROUP_API = this.API = '/accidentCauseGroup';

  constructor(private http: HttpClient) {
  }

  httpOption = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    })
  };

  getAll(): Observable<any> {
    return this.http.get(this.ACIDENTCAUSEGROUP_API);
  }

  getType(id: number): Observable<any> {
    return this.http.get(this.ACIDENTCAUSEGROUP_API + '/' + id);
  }

  save(accidentCauseGroup: any): Observable<any> {
    let result: Observable<object>;
    if (accidentCauseGroup['id']) {
      result = this.http.put(this.ACIDENTCAUSEGROUP_API, accidentCauseGroup);
    } else {
      result = this.http.post(this.ACIDENTCAUSEGROUP_API, accidentCauseGroup);
    }
    return result;
  }

  remove(id) {
    const url = `${this.ACIDENTCAUSEGROUP_API}/${id}`;
    console.log('verficando res ' + url);
    return this.http.delete(url);
  }
}
