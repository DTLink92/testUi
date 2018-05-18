import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EmployeeDetail} from '../../shared/employeeDetail';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',

    })
  };

  getEmployees(): Observable<any> {
    return this.http.get('http://localhost:8080/employees')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getEmployee(id: number): Observable<EmployeeDetail> {
    return this.http.get<EmployeeDetail>('http://localhost:8080/employees/' + id)
      .map(res => {
        return res;
      });
  }
  postEmployee(employee: EmployeeDetail): Observable<EmployeeDetail> {
    return this.http.post<any>('http://localhost:8080/employees', employee, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
}
