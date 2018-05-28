import { Component, OnInit } from '@angular/core';
import {AccidentType} from '../shared/AccidentType';
import {AccidentTypeService} from '../services/accident-register/accident-type.service';

@Component({
  selector: 'app-accident-type',
  templateUrl: './accident-type.component.html',
  styleUrls: ['./accident-type.component.scss']
})
export class AccidentTypeComponent implements OnInit {

  errorMessage = '';
  accidentTypes: AccidentType;
  constructor( private accidentTypeService: AccidentTypeService) { }
  ngOnInit() {
    this.accidentTypeService.getAll().subscribe(data => {
      this.accidentTypes = data;
      console.log('mostar lista de tipos de accidentes', this.accidentTypes);

    });
  }
  isInvalidForm() {
    /* if (this.invalidString(this.accidentTypes.name_type_accident, 200, 'Nombre')) {
       return true;
     }
     if (this.invalidString(this.accidentTypes.code_type_accident, 100, 'Nombre')) {
       return true;
     }*/
  }
  invalidString(currentString, maxlength, input) {
    if (!currentString) {
      this.errorMessage = 'El campo ' + input + ' no puede estar vacio';
      return true;
    }
    if (currentString.length > maxlength) {
      this.errorMessage = 'El ' + input + ' no puede exceder de 50 caracteres';
      return true;
    }
    return false;
  }
  cancel() {
    const element = document.getElementById('router-to-accidentType-list');
    element.click();
  }
}
