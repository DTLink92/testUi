import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Employeeaccident } from '../../shared/employeeaccident';
import {EmployeeAccidentService} from '../../services/accident/employee-accident.service';

@Component({
  selector: 'app-employee-accident-add',
  templateUrl: './employee-accident-add.component.html',
  styleUrls: ['./employee-accident-add.component.scss']
})
export class EmployeeAccidentAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeAccidentAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employeeaccident,
    public dataService: EmployeeAccidentService) { }

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
