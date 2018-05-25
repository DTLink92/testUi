import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeeAccidentService} from '../../services/accident/employee-accident.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-accident-edit',
  templateUrl: './employee-accident-edit.component.html',
  styleUrls: ['./employee-accident-edit.component.scss']
})
export class EmployeeAccidentEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeAccidentEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: EmployeeAccidentService) {
  console.log(data);
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
