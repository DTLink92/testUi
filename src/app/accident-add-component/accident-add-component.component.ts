import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Employeeaccident } from '../shared/employeeaccident';
import {AccidentTypeService} from '../services/accident-register/accident-type.service';
import {AreaService} from '../services/area.service';
import {AccidentService} from '../services/accident-register/accident.service';

@Component({
  selector: 'app-accident-add-component',
  templateUrl: './accident-add-component.component.html',
  styleUrls: ['./accident-add-component.component.scss']
})

export class AccidentAddComponentComponent implements OnInit {
  public accidentTypes;
  public areas;
  constructor(public dialogRef: MatDialogRef<AccidentAddComponentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employeeaccident,
              public dataService: AccidentService,
              public accidentTypeServices: AccidentTypeService,
              public areaService: AreaService
              ) {

    this.accidentTypeServices.getAll().subscribe(value => {this.accidentTypes = value; console.log(this.accidentTypes); });
    this.areaService.getAll().subscribe(value => {this.areas = value});
  }

  formControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.add(this.data);
  }

  ngOnInit() {
  }

}
