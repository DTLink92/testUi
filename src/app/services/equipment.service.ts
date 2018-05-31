import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {Equipment} from '../shared/equipment';
import {EmployeeService} from './employeeService/employee-service.service';
import {EquipmentDetail} from '../shared/equipmentDetail';
import {EmployeeDetail} from '../shared/employeeDetail';


@Injectable()
export class EquipmentService {
  public API = '//localhost:8080';
  public EQUIPMENT_API = this.API + '/equipments';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    // return this.http.get('//localhost:8080/type_equipments');
    return this.http.get(this.API + '/equipments');

  }
  getAllType(id): Observable<any> {
    // return this.http.get('//localhost:8080/type_equipments');
    return this.http.get(this.API + '/equipments/type/' + id);

  }
  get(id: string) {
    return this.http.get(this.EQUIPMENT_API + '/' + id);
  }
  save(equipment: any): Observable<any> {
    let result: Observable<Object>;
    console.log('entro aqui');
    if (equipment ['id'] ) {
      console.log('este es el Id' + equipment ['id'] );
      result = this.http.put(this.EQUIPMENT_API, equipment);
    } else {
      result = this.http.post(this.EQUIPMENT_API, equipment);
    }
    return result;
  }
  remove(id) {
    const url = `${this.EQUIPMENT_API}/${id}`;
    console.log('entro aqui remove service ' + url);
    return this.http.delete( url);
  }
}

