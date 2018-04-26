import {Injectable} from '@angular/core';
import {Employee} from '../shared/employee';
import {EMPLOYEES} from '../shared/employees';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  constructor() {
  }

  getEmployees(): Promise<Employee[]> {
    return Observable.of(EMPLOYEES).delay(2000).toPromise();
  }

  getEmployee(id: number): Promise<Employee> {
    return Observable.of(EMPLOYEES.filter((employee) => employee.id === id)[0]).delay(2000).toPromise();
  }

  getFeaturedEmployee(): Promise<Employee> {
    return Observable.of(EMPLOYEES.filter((employee) => employee.featured)[0]).delay(2000).toPromise();
  }
}
