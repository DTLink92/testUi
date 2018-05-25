import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeeAccidentService} from '../../services/accident/employee-accident.service';

@Component({
  selector: 'app-employee-accident-delete',
  templateUrl: './employee-accident-delete.component.html',
  styleUrls: ['./employee-accident-delete.component.scss']
})
export class EmployeeAccidentDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeAccidentDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dataService: EmployeeAccidentService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.delete(this.data.id);
  }


  ngOnInit() {
  }


}
