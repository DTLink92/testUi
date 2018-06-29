import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AccidentService} from '../services/accident-register/accident.service';

@Component({
  selector: 'app-accident-delete-component',
  templateUrl: './accident-delete-component.component.html',
  styleUrls: ['./accident-delete-component.component.scss']
})
export class AccidentDeleteComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccidentDeleteComponentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dataService: AccidentService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.delete(this.data.id);
  }


  ngOnInit() {
  }
}
