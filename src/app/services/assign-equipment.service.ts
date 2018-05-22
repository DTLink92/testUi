import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {EmployeeAssignEquipment} from '../shared/assignEquipment';

@Injectable()
export class AssignEquipmentService {
  public POSITION_API = baseURL + 'employee_equipment';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getAssignEquipments(): Observable<any> {
    return this.http.get(this.POSITION_API)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getAssignEquipment(id: number): Observable<EmployeeAssignEquipment> {
    return this.http.get<EmployeeAssignEquipment>(this.POSITION_API + '/' + id)
      .map(res => {
        return res;
      });
  }

  save(assignEq: any): Observable<any> {
    let result: Observable<Object>;
    if (assignEq['id']) {
      result = this.http.put(this.POSITION_API, assignEq);
    } else {
      result = this.http.post(this.POSITION_API, assignEq);
    }
    return result;
  }

  postContract(assignEq: EmployeeAssignEquipment): Observable<EmployeeAssignEquipment> {
    return this.http.post<any>('http://localhost:8080/position_assign_employees', assignEq, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  updateContract(assignEq: EmployeeAssignEquipment): Observable<EmployeeAssignEquipment> {
    return this.http.post<any>('http://localhost:8080/position_assign_employees/' + assignEq.id, assignEq, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

}
