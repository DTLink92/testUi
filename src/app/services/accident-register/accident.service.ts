import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Accident} from '../../shared/Accident';
import {baseURL} from '../../shared/baseurl';

@Injectable()
export class AccidentService {

  headers: Headers;
  constructor(private http: HttpClient) {
    this.headers = new Headers({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
  }
  getAccidents(): Observable<any> {
    return this.http.get('http://localhost:8080/accidents')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getAccident(id: number): Observable<Accident> {

    return this.http.get<Accident>('http://localhost:8080/accidents/' + id)
      .map(res => {
        return res;
      });
  }
  postAccident(accident: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/accidents', accident)
      .map((res) => {
        return <Accident>res;
      }).catch(error => {
        return error;
      });
  }
  deleteAccident(id: number) {
    this.http.delete('http://localhost:8080/accidents/' + id).subscribe();
  }
  updateAccident(accident: any): Observable<any> {
    return this.http.put<any>('http://localhost:8080/accidents', accident)
      .map((res) => {
        return <Accident>res;
      }).catch(error => {
        return error;
      });
  }
  addAccident(accident: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/accidents', accident)
      .map((res) => {
        return <Accident>res;
      }).catch(error => {
        return error;
      });
  }
  getIdArea(): Observable<any> {
    return this.http.get('http://localhost:8080/areas')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getAccidetTypeId(): Observable<any> {
    return this.http.get('http://localhost:8080/accidentTypes')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getFeaturedAccident(): Observable<Accident> {
    return this.http.get<Accident>(baseURL + 'accidents?featured=true')
      .map(res => {
        return res[0];
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  getAccidentIds(): Observable<number[]> {
    return this.getAccidents()
      .map(accidents => {
        return accidents.map(accident => accident.id);
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

}
