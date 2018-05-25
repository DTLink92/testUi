import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Employeeaccident } from '../../shared/employeeaccident';
import {EmployeeAccidentService} from '../../services/accident/employee-accident.service';
import {EmployeeService} from '../../services/employeeService/employee-service.service';
import {Employee} from '../../shared/employee';

@Component({
  selector: 'app-employee-accident-add',
  templateUrl: './employee-accident-add.component.html',
  styleUrls: ['./employee-accident-add.component.scss']
})
export class EmployeeAccidentAddComponent implements OnInit {
  public employees;
  public accidents;
  constructor(public dialogRef: MatDialogRef<EmployeeAccidentAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employeeaccident,
    public dataService: EmployeeAccidentService,
              public employeeService: EmployeeService) {

    this.employeeService.getEmployees().subscribe(value => {this.employees = value; console.log(this.employees); });
    this.dataService.getAccidents().subscribe(value => {this.accidents = value; console.log(this.accidents); });

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
