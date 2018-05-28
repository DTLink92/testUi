import { Component, OnInit } from '@angular/core';
import {AccidentCauseGroup} from '../shared/AccidentCauseGroup';
import {AccidentCauseGroupService} from '../services/accident-register/accident-cause-group.service';

@Component({
  selector: 'app-accident-cause-group',
  templateUrl: './accident-cause-group.component.html',
  styleUrls: ['./accident-cause-group.component.scss']
})
export class AccidentCauseGroupComponent implements OnInit {

  errorMessage = '';
  accidentCauseGroups: AccidentCauseGroup;

  constructor(private accidentCauseGroupService: AccidentCauseGroupService) {
  }

  ngOnInit() {
    this.accidentCauseGroupService.getAll().subscribe(data => {
      this.accidentCauseGroups = data;
      console.log('mostar grupos de lista de causas de accidentes', this.accidentCauseGroups);

    });
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

  isInvalidForm() {
    /* if (this.invalidString(this.accidentTypes.name_type_accident, 200, 'Nombre')) {
       return true;
     }
     if (this.invalidString(this.accidentTypes.code_type_accident, 100, 'Nombre')) {
       return true;
     }*/
  }

}
