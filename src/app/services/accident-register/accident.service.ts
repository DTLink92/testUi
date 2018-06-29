import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Accident} from '../../shared/Accident';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccidentService {

  dataChange: BehaviorSubject<Accident[]> = new BehaviorSubject<Accident[]>([]);


  private readonly API_URL = 'http://localhost:8080/accidents';
  dialogData: any;

  constructor (public httpClient: HttpClient) {}

  get data(): Accident[] {
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
    this.httpClient.get<Accident[]>(this.API_URL).subscribe(data => {
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
  getAccident(id): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
  add(any): void {
    this.httpClient.post<Accident[]>(this.API_URL, any, this.httpOptions).subscribe(data => {
        this.dialogData = data;
      },
      (error: HttpErrorResponse) => {
        console.log (error.name + ' ' + error.message);
      });
  }

}
