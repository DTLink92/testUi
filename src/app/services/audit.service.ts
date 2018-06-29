import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {AUDIT} from '../shared/audits';

@Injectable()
export class AuditService {

  public PROJECT_API = baseURL + 'auditHistorys';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    console.log('#######lista de todos los auditHistorys #####' + this.PROJECT_API);
    return this.http.get(this.PROJECT_API);
    // return Observable.of(AUDIT).delay(2000);
  }

}
