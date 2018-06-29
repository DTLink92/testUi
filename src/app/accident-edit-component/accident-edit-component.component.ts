import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AccidentService} from '../services/accident-register/accident.service';
import {FormControl, Validators} from '@angular/forms';
import {AccidentTypeService} from '../services/accident-register/accident-type.service';
import {AreaService} from '../services/area.service';

@Component({
  selector: 'app-accident-edit-component',
  templateUrl: './accident-edit-component.component.html',
  styleUrls: ['./accident-edit-component.component.scss']
})
export class AccidentEditComponentComponent implements OnInit {

  public accidentTypes;
  public areas;
  constructor(public dialogRef: MatDialogRef<AccidentEditComponentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dataService: AccidentService,
              public accidentTypeServices: AccidentTypeService,
              public areaService: AreaService
  ) {
    this.accidentTypeServices.getAll().subscribe(value => {this.accidentTypes = value; console.log(this.accidentTypes); });
    this.areaService.getAll().subscribe(value => {this.areas = value});
  }


  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
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

  edit(): void {
    this.dataService.update(this.data);
  }

  ngOnInit() {

  }

}
