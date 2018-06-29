import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Employeeaccident } from '../../shared/employeeaccident';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Employee} from '../../shared/employee';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeAccidentService {

  dataChange: BehaviorSubject<Employeeaccident[]> = new BehaviorSubject<Employeeaccident[]>([]);
  dataChangeEmployee: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);


  private readonly API_URL = 'http://localhost:8080/employee_accidents';
  private readonly API_URL_EMPLOYEE = 'http://localhost:8080/employees';
  accident: any;
  dialogData: any;

  constructor (public httpClient: HttpClient) {}

  get data(): Employeeaccident[] {
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
  add(employeeaccident: Employeeaccident): void {
    this.httpClient.post<Employeeaccident[]>(this.API_URL, employeeaccident, this.httpOptions).subscribe(data => {
        this.dialogData = data;
      },
      (error: HttpErrorResponse) => {
        console.log (error.name + ' ' + error.message);
      });
  }
  update (employeeaccident: Employeeaccident): void {
    this.httpClient.put<Employeeaccident[]>(this.API_URL, employeeaccident, this.httpOptions).subscribe(data => {
        this.dialogData = data;
      },
      (error: HttpErrorResponse) => {
        console.log (error.name + ' ' + error.message);
      });
  }

  delete (id: number): void {
    this.httpClient.delete(this.API_URL + '/' + id, this.httpOptions)
      .subscribe((ok) => {
        console.log(ok);
      });

  }

  getAll(): void {
    this.httpClient.get<Employeeaccident[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log (error.name + ' ' + error.message);
      });
  }
  getAllEmployees(id: any): void {
    this.httpClient.get<Employeeaccident[]>(this.API_URL + '/accident/' + id).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log (error.name + ' ' + error.message);
      });
  }

  getAccidents(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/accidents')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
  getAllCount(): Observable<any> {
    return this.httpClient.get(this.API_URL)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  setAccident(id:number): void {
    console.log('debug service employee accident >>>', id);
    this.accident = id;
    console.log('debug service employee accident >>>', this.accident);
  }

}
