import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {EmployeeDetail} from '../../shared/employeeDetail';

@Injectable()
export class EmployeeService {
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
  postEmployee(employee: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/employees', employee)
      .map((res) => {
        return <EmployeeDetail>res;
      }).catch(error => {
        return error;
      });
  }
  deleteEmployee(id: number) {
    this.http.delete('http://localhost:8080/employees/' + id).subscribe();
  }
  updateEmployee(employee: any): Observable<any> {
    return this.http.put<any>('http://localhost:8080/employees', employee)
      .map((res) => {
        return <EmployeeDetail>res;
      }).catch(error => {
        return error;
      });
  }
  getPositions(): Observable<any> {
    return this.http.get('http://localhost:8080/positions')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
}
