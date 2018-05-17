import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {EmployeeDetail} from '../../shared/employeeDetail';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<any> {
    return this.http.get('http://localhost:8080/employees')
      .map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  getEmployee(id: number): Observable<EmployeeDetail> {
    return this.http.get<EmployeeDetail>('http://localhost:8080/employees/' + id)
      .map(res => {
        return res;
      });
  }
}
