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
    return this.http.post<any>('http://localhost:8080/position_assign_employees', contract, this.httpOptions)
      .map((res) => {
        return <Contract>res;
      }).catch(error => {
        return error;
      });
  }

  updateContract(contract: Contract): Observable<any> {
    return this.http.put<any>('http://localhost:8080/position_assign_employees', contract)
      .map((res) => {
        return <Contract>res;
      }).catch(error => {
        return error;
      });
  }
  getEmployeesByPosition(id: number): Observable<any> {
    const url = 'http://localhost:8080/position_assign_employees/position=' + id;
    return this.http.get(url)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
  deleteContract(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/position_assign_employees/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
}
