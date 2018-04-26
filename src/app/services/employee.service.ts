import {Injectable} from '@angular/core';
import {Employee} from '../shared/employee';
import {EMPLOYEES} from '../shared/employees';

@Injectable()
export class EmployeeService {

  constructor() {
  }

  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(EMPLOYEES);
  }

  getEmployee(id: number): Promise<Employee> {
    return Promise.resolve(EMPLOYEES.filter((employee) => employee.id === id)[0]);
  }

  getFeaturedEmployee(): Promise<Employee> {
    return Promise.resolve(EMPLOYEES.filter((employee) => employee.featured)[0]);
  }
}
