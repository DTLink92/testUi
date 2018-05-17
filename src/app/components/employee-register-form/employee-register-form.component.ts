import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-register-form',
  templateUrl: './employee-register-form.component.html',
  styleUrls: ['./employee-register-form.component.css']
})
export class EmployeeRegisterFormComponent implements OnInit {

  data = {};
  allPositions = [
    {
      id: 4,
      createdOn: '2018-05-16T11:44:08.000+0000',
      updatedOn: null,
      version: 0,
      code: null,
      name: 'Jefe',
      higherWorkPosition: null,
      area: null,
      process: null,
      purpose: null
    },
    {
      id: 5,
      createdOn: '2018-05-16T11:44:08.000+0000',
      updatedOn: null,
      version: 0,
      code: null,
      name: 'Empleado',
      higherWorkPosition: null,
      area: null,
      process: null,
      purpose: null
    }
  ];
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    console.log('User: ', this.data);
  }

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      /*var binaryString = readerEvt.target.result;
      this.data.profileImage = btoa(binaryString);*/
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.data.profileImage = btoa(binaryString);
  }
}
