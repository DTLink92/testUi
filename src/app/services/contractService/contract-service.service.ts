import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contract} from '../../shared/contract';
import {Employee} from '../../shared/employee';
import {EmployeeDetail} from '../../shared/employeeDetail';

@Injectable()
export class ContractService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  postContract(contract: Contract): Observable<any> {
    return this.http.post<any>('http://192.168.36.130:1999/position_assign_employees', contract, this.httpOptions)
      .map((res) => {
        return <Contract>res;
      }).catch(error => {
        return error;
      });
  }

  updateContract(contract: Contract): Observable<any> {
    return this.http.put<any>('http://192.168.36.130:1999/position_assign_employees', contract)
      .map((res) => {
        return <Contract>res;
      }).catch(error => {
        return error;
      });
  }
  getEmployeesByPosition(id: number): Observable<any> {
    const url = 'http://192.168.36.130:1999/position_assign_employees/position=' + id;
    return this.http.get(url)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
  deleteContract(id: number): Observable<any> {
    return this.http.delete<any>('http://192.168.36.130:1999/position_assign_employees/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
  reportEmployeeByPosition(): Observable<any> {
    return this.http.get<any>('http://192.168.36.130:1999/position_assign_employees/employeeByPosition')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
  reportEmployeeByGenre(): Observable<any> {
    return this.http.get<any>('http://192.168.36.130:1999/position_assign_employees/employeeByGenre')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
  reportEmployeeBySalary(): Observable<any> {
    return this.http.get<any>('http://192.168.36.130:1999/position_assign_employees/employeeBySalary')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
}
