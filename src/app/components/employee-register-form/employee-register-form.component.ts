import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from '../../services/employeeService/employee-service.service';
import {ContractService} from '../../services/contractService/contract-service.service';
import {Contract} from '../../shared/contract';
import {Employee} from '../../shared/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-register-form',
  templateUrl: './employee-register-form.component.html',
  styleUrls: ['./employee-register-form.component.css']
})
export class EmployeeRegisterFormComponent implements OnInit {

  router;
  @Output() load: EventEmitter<any>  = new EventEmitter<any>() ;
  @Input('logo') logo: string;
  contract: Contract;
  files;
  imageData = '';
  errorMessage = '';
  data = {
    positionId: 0,
    supervisorId: 0,
    description: '',
    initDate: null,
    finishDate: null
  };
  civilStates = [
    { value: 'Soltero/a'},
    { value: 'Casado/a'},
    { value: 'Divorciado/a'},
    { value: 'Viudo/a'}
  ];
  employee = {
    id: 0,
    profileImage: '',
    firstName: '',
    lastName: '',
    ci: 0,
    yearsOld: 0,
    phoneNumber: 0,
    civilState: '',
    dependenciesAmount: 0,
    experience: '',
    birthday: null,
    positionName: '',
    supervisorName: '',
    description: '',
    initDate: null,
    finishDate: null
  };
  allPositions = [];
  allSupervisor: Array<Employee> = [];

  constructor(private employeeService: EmployeeService,
              private contractService: ContractService) { }

  ngOnInit() {
    this.employee.civilState = this.civilStates[0].value;
    this.employeeService.getPositions().subscribe(data => {
      this.allPositions = data;
      this.data.positionId = data[0].id;
      this.positionId(this.data.positionId);
    });
  }

  async onSubmit() {
    if (!this.isInvalidForm()) {
      this.employee.profileImage = this.imageData;
      this.employeeService.postEmployee(this.employee).subscribe(result => {
        if (result.id) {
          this.contract = {
            id: 0,
            description: this.data.description,
            initDate: this.data.initDate,
            finishDate: this.data.finishDate,
            employeeId: result.id,
            positionId: this.data.positionId,
            supervisorId: this.data.supervisorId,
            employeeFirstName: '',
            employeeLastName: '',
            positionName: '',
            employeeCi: 0
          };
          this.contractService.postContract(this.contract).subscribe(response => {
            const element = document.getElementById('router-to-employee-list');
            element.click();
          });
        }
      });
    }
  }

  previewImage(event): void {
    this.imageData = event.target.result;
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newTarget: any = e.target;
        this.imageData = newTarget.result;
        this.files = input.files[0];
        this.load.emit({file: this.files, imageData: this.imageData});
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  async FileTobase64Image(file) {
    this.employee.profileImage = btoa(file);
  }

  isInvalidForm() {
    if (this.files !== '' && this.files !== undefined) {
      if (this.files.size > 2097152) {
        this.errorMessage = 'El tamaño de la imagen no debe exceder los 2MB';
        return true;
      }
      if (this.files.type !== 'image/jpeg' && this.files.type !== 'image/png') {
        this.errorMessage = 'La imagen tiene un formato incorrecto';
        return true;
      }
    }
    if (this.invalidString(this.employee.firstName, 100, 'Nombre')) {
      return true;
    }
    if (this.invalidString(this.employee.lastName, 100, 'apellido')) {
      return true;
    }
    if (this.invalidString(this.employee.civilState, 1000, 'Estado civil')) {
      return true;
    }
    if (this.employee.phoneNumber <= 0) {
      this.errorMessage = 'El Telefono no puede ser 0 o menor a 0';
      return true;
    }
    if (this.employee.ci <= 0) {
      this.errorMessage = 'El Ci no puede ser 0 o menor a 0';
      return true;
    }
    if (this.data.positionId <= 0) {
      this.errorMessage = 'Seleccione un cargo para el empleado';
      return true;
    }
    return false;
  }

  invalidString(currentString, maxlength, input) {
    if (!currentString) {
      this.errorMessage = 'El campo ' + input + ' no puede estar vacio';
      return true;
    }
    if (currentString.length > maxlength) {
      this.errorMessage = 'El ' + input + ' no puede exceder de 50 caracteres';
      return true;
    }
    return false;
  }

  positionId(id: any) {
    this.data.positionId = id;
    const highPositionid = this.getHighPositionId(id);
    /*this.contractService.getEmployeesByPosition(id).subscribe(response => {
      this.allSupervisor = response;
      if (this.allSupervisor.length > 0) {
        this.data.supervisorId = this.allSupervisor[0].id;
      }
    });*/
  }

  getHighPositionId(id: any) {
    this.allPositions.forEach(position => {
      if (position.id === id) {
        return position.higherWorkPosition;
      }
    });
  }

  supervisorId(id: any) {
    this.data.supervisorId = id;
  }
  changeCivilState(civilState: any) {
    this.employee.civilState = civilState;
  }

  cancel() {
    const element = document.getElementById('router-to-employee-list');
    element.click();
  }
}
