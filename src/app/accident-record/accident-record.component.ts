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
    this.accidentService.getIdArea().subscribe(data => {
      // this.accident.genere = this.generes[0].value;
      this.allArea = data;
      // this.data.areaId = data[0].id;
      // this.ariaId(this.data.areaId);
    });
    this.accidentService.getAccidetTypeId().subscribe( data => {
      this.allAccidentType =  data;
      // this.data.accidentTypeId = data[0].id;
      // this.accidentTypeId(this.data.accidentTypeId);
    });
  }
  async onSubmitAccident() {
    this.accidentService.postAccident(this.accident).subscribe(result => {
      if (result.id) {
        this.accidentService.postAccident(this.accident).subscribe(response => {
          const element = document.getElementById('reouter-to-accident-list');
          element.click();
        });
      }
    } );
  }
  isInvalidForm() {
    if (this.invalidString(this.accident.nameAccidentado, 100, 'nombre del accidentado')) {
      return true;
    }
    if (this.invalidString(this.accident.description_accident, 100, 'descripcion del accidente')) {
      return true;
    }
    if (this.invalidString(this.accident.gravity_accident, 1000, 'gravedad del accidente')) {
      return true;
    }
    return false;
  }
  invalidString(currentString, maxlength, input) {
    if (!currentString) {
      this.errorMessage = 'el campo' + input + ' no puede estar vacio';
      return true;
    }
    if (currentString.length > maxlength) {
      this.errorMessage = 'El ' + input + ' no puede exceder de 50 caracteres';
      return true;
    }
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
