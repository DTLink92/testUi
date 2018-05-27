import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TypeEquipmentService {
  public API = '//localhost:8080';
  public TYPE_EQUIPMENT_API = this.API + '/type_equipments';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    // return this.http.get('//localhost:8080/type_equipments');
    return this.http.get(this.API + '/type_equipments');

  }
  get(id: string) {
    return this.http.get(this.TYPE_EQUIPMENT_API + '/' + id);
  }
  save(typeEquipment: any): Observable<any> {
    let result: Observable<Object>;
    console.log('entro aqui');
    if (typeEquipment ['id'] ) {
      console.log('este es el Id' + typeEquipment ['id'] );
      result = this.http.put(this.TYPE_EQUIPMENT_API, typeEquipment);
    } else {
      result = this.http.post(this.TYPE_EQUIPMENT_API, typeEquipment);
    }
    return result;
  }
  /* remove(id: string) {
    return this.http.delete(id);
  }*/
  remove(id) {
     const url = `${this.TYPE_EQUIPMENT_API}/${id}`;
     console.log('entro aqui remove service ' + url);
     return this.http.delete( url);
   }
}
