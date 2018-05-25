import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {AssignEquipment} from '../shared/assignEquipment';

@Injectable()
export class AssignEquipmentService {
  public PROFILE_API = baseURL + 'assign_equipment';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getAssignEquipments(): Observable<any> {
    return this.http.get(this.PROFILE_API)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getAssignEquipment(id: number): Observable<AssignEquipment> {
    return this.http.get<AssignEquipment>(this.PROFILE_API + '/' + id)
      .map(res => {
        return res;
      });
  }

  save(assignEq: any): Observable<any> {
    let result: Observable<Object>;
    if (assignEq['id']) {
      result = this.http.put(this.PROFILE_API, assignEq);
    } else {
      result = this.http.post(this.PROFILE_API, assignEq);
    }
    return result;
  }

  createAssignEquipment(assignEq: AssignEquipment): Observable<AssignEquipment> {
    return this.http.post<any>(this.PROFILE_API, assignEq, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  updateAssignEquipment(assignEq: AssignEquipment): Observable<AssignEquipment> {
    return this.http.post<any>(this.PROFILE_API + '/' + assignEq.id, assignEq, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  remove(id: number) {
    const url = `${this.PROFILE_API}/${id}`;
    return this.http.delete( url);
  }

}
