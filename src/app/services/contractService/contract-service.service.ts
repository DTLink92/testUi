import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contract} from '../../shared/contract';

@Injectable()
export class ContractService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  postContract(contract: Contract): Observable<Contract> {
    return this.http.post<any>('http://localhost:8080/position_assign_employees', contract, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
}
