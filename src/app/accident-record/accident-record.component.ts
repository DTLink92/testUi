import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Accident} from '../shared/Accident';
import {AccidentService} from '../services/accident-register/accident.service';


@Component({
  selector: 'app-accident-record',
  templateUrl: './accident-record.component.html',
  styleUrls: ['./accident-record.component.scss']
})
export class AccidentRecordComponent implements OnInit {

  router;
  @Output() load: EventEmitter<any>  = new EventEmitter<any>() ;
// accident: Accident;
  errorMessage;
  data = {
    areaId: 0,
    accidentTypeId: 0
  };
  accident =  {
    id: 0,
    nameAccidentado: '',
    date_accident: '',
    hour_accident: '',
    place_accident: '',
    gravity_accident: '',
    description_accident: '',
    AccidentTypeId: '',
    areaId: ''
   };
  allArea = [];
  allAccidentType = [];
  allSupervisorAccident:  Array<Accident> = [];
  constructor(private accidentService: AccidentService ) { }

  ngOnInit() {
    // this.accidentService.getIdArea().subscribe(data => {
      // this.accident.genere = this.generes[0].value;
    //  this.allArea = data;
      // this.data.areaId = data[0].id;
      // this.ariaId(this.data.areaId);
    // });
    // this.accidentService.getAccidetTypeId().subscribe( data => {
      // this.allAccidentType =  data;
      // this.data.accidentTypeId = data[0].id;
      // this.accidentTypeId(this.data.accidentTypeId);
    // });
  }
  async onSubmitAccident() {

  }
  isInvalidForm() {

    return false;
  }
  invalidString(currentString, maxlength, input) {
    return false;
  }
  getHighAreaId(id: any) {
    this.allArea.forEach(area => {
      if (area.id === id) {
        return area.higherWorkPosition;
      }
    });
  }
  areaId(id: any) {
    this.data.areaId = id;
    const highAreaid = this.getHighAreaId(id);
  }

  changeAccidentType(accidentTypeId: any) {
    this.accident.AccidentTypeId = accidentTypeId;
  }
  cancel() {
    const element = document.getElementById('router-to-accident-list');
    element.click();
  }
}
