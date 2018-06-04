import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {AssignEquipment} from '../shared/assignEquipment';

@Injectable()
export class AssignEquipmentService {
  public ASEQ_API = baseURL + 'assign_equipment';
  headers: Headers;

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
      'Accept': 'q=0.8;application/json;q=0.9'
    })
  };

  getAssignEquipments(): Observable<any> {
    return this.http.get(this.ASEQ_API)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getAssignEquipment(id: number): Observable<AssignEquipment> {
    return this.http.get<AssignEquipment>(this.ASEQ_API + '/' + id)
      .map(res => {
        return res;
      });
  }

  save(assignEq: any): Observable<any> {
    console.log('ingresa a save');
    let result: Observable<Object>;

    console.log(result);
    console.log('ESTE ES EL ID DE ASSIGN' + assignEq['id']);
    if (assignEq['id']) {
      console.log('ID DE ASSIGN: ' + assignEq['id']);
      result = this.http.put(this.ASEQ_API, assignEq);
    } else {
      console.log('ESTE ES EL ID DE SUPERVISOR: ' + assignEq['idSupervisor'] );
      console.log('ESTE ES EL ID DE EMPLEADO: ' + assignEq['idEmployee']);
      result = this.http.post(this.ASEQ_API, assignEq);

    }
    console.log('TERMINA CONDICIONAL');
    console.log('Result: ' + result);
    return result;
  }

  createAssignEquipment(assignEq: AssignEquipment): Observable<AssignEquipment> {
    return this.http.post<any>(this.ASEQ_API, assignEq, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  remove(id: number) {
    const url = `${this.ASEQ_API}/${id}`;
    return this.http.delete( url);
  }

}
