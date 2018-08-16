import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Employee} from '../../shared/employee';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Employeeaccident} from '../../shared/employeeaccident';
import {Groupcause} from '../../shared/groupcause';

@Injectable()
export class AccidentCauseService {


  dataChange: BehaviorSubject<Groupcause[]> = new BehaviorSubject<Groupcause[]>([]);

  private readonly API_URL = 'http://192.168.36.130:1999/accidentCauseGroup';
  dialogData: any;

  constructor (public httpClient: HttpClient) {}

  get data(): Groupcause[] {
    return this.dataChange.value;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept' : 'application/json'
    })
  };
  getDialogData() {
    return this.dialogData;
  }

  getAll(): void {
    this.httpClient.get<Groupcause[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log (error.name + ' ' + error.message);
      });
  }

  getGroups(): Observable<any> {
    return this.httpClient.get('http://192.168.36.130:1999/accidentCauseGroup')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getCauses(idAccident): Observable<any> {
    return this.httpClient.get('http://192.168.36.130:1999/accidents_cause/accident/' + idAccident, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
  getCausesGraph(): Observable<any> {
    return this.httpClient.get('http://192.168.36.130:1999/accidents_cause/causes', this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  addCause(idCause, idAccident): Observable<any> {
    return this.httpClient.get('http://192.168.36.130:1999/accidents_cause/addaccidentcause/' + idAccident + '/' + idCause, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  deleteCause(idCause, idAccident): Observable<any> {
    return this.httpClient.get('http://192.168.36.130:1999/accidents_cause/deleteaccidentcause/' + idAccident + '/' + idCause, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }



  update(cause, id_accident): void {
    cause.idCause = cause.id;
    cause.idAccident = id_accident;

    this.httpClient.put<any>('http://192.168.36.130:1999/accidents_cause', cause, this.httpOptions).subscribe(data => {
        // this.dialogData = data;
      },
      (error: HttpErrorResponse) => {
        console.log (error.name + ' ' + error.message);
      });
  }

}
