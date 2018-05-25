import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Employeeaccident } from '../../shared/employeeaccident';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EmployeeAccidentService {

  dataChange: BehaviorSubject<Employeeaccident[]> = new BehaviorSubject<Employeeaccident[]>([]);
  private readonly API_URL = 'http://localhost:8080/employee_accidents';
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
    this.httpClient.delete(this.API_URL + '/' + id,this.httpOptions)
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

}
