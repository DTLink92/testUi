import { Component, OnInit } from '@angular/core';
import {AccidentCauseGroup} from '../shared/AccidentCauseGroup';
import {AccidentCauseGroupService} from '../services/accident-register/accident-cause-group.service';
import {AccidentCauseService} from '../services/accident/accident-cause.service';

@Component({
  selector: 'app-accident-cause-group',
  templateUrl: './accident-cause-group.component.html',
  styleUrls: ['./accident-cause-group.component.scss']
})
export class AccidentCauseGroupComponent implements OnInit {
  public text_cause;
  errorMessage = '';
  accidentCauseGroups: AccidentCauseGroup[];

  constructor(private accidentCauseGroupService: AccidentCauseGroupService,
              private causeService: AccidentCauseService) {

  }

  ngOnInit() {
    this.accidentCauseGroupService.getAccidentCausesGroups().subscribe(data => {
      this.accidentCauseGroups = data;
      console.log('mostar grupos de lista de causas de accidentes', this.accidentCauseGroups);

    });
    this.accidentCauseGroupService.getIdCauses().subscribe(data => {
      // this.accidentCauseGroups = data;
    });
  }
  agregar(group_id, text_cause) {
    var res = this.accidentCauseGroupService.saveCause({
      idGroup: group_id,
      description: text_cause
    });
    res.subscribe(
      data => {
        console.log(data);
        window.location.reload();

      });
    console.log(res);
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
