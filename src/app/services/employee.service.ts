import {Injectable} from '@angular/core';
import {Employee} from '../shared/employee';
import {EMPLOYEES} from '../shared/employees';

@Injectable()
export class EmployeeService {

  constructor() {
  }

  getEmployees(): Employee[] {
    return EMPLOYEES;
  }

  getEmployee(id: number): Employee {
    return EMPLOYEES.filter((employee) => employee.id === id)[0];
  }

  getFeaturedEmployee(): Employee {
    return EMPLOYEES.filter((employee) => employee.featured)[0];
  }
}
