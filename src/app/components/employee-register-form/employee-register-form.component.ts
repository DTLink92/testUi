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
    projectId: 0,
    description: '',
    initDate: null,
    finishDate: null,
    salary: 0
  };
  civilStates = [
    { value: 'Soltero/a'},
    { value: 'Casado/a'},
    { value: 'Divorciado/a'},
    { value: 'Viudo/a'}
  ];
  genres = [
    { value: 'Masculino'},
    { value: 'Femenino'},
    { value: 'Otro'}
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
    finishDate: null,
    genre: '',
    salary: 0
  };
  allPositions = [];
  allSupervisor: Array<Employee> = [];
  allProjects = [];

  constructor(private employeeService: EmployeeService,
              private contractService: ContractService) { }

  ngOnInit() {
    this.employee.civilState = this.civilStates[0].value;
    this.employee.genre = this.genres[0].value;
    this.employeeService.getPositions().subscribe(data => {
      this.allPositions = data;
      this.data.positionId = data[0].id;
      this.positionId(this.data.positionId);
    });
    this.employeeService.getProjects().subscribe(data => {
      this.allProjects = data;
      this.data.projectId = data[0].id;
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
            employeeCi: 0,
            salary: this.data.salary,
            projectId: this.data.projectId
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
    if (this.invalidNumber(this.employee.phoneNumber, 'Telefono')) {
      return true;
    }
    if (this.invalidNumber(this.employee.ci, 'Ci')) {
      return true;
    }
    if (this.invalidNumber(this.data.salary, 'Salario')) {
      return true;
    }
    if (this.data.positionId <= 0) {
      this.errorMessage = 'Seleccione un cargo para el empleado';
      return true;
    }
    return false;
  }
  invalidNumber(currentNumber, input) {
    if (currentNumber <= 0) {
      this.errorMessage = 'El '+input+' no puede ser 0 o menor a 0';
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

  positionId(id: number) {
    this.data.positionId = id;
    let highPositionid = 0;
    this.allPositions.forEach(position => {
      if (position.id.toString() === id) {
        highPositionid = position.higherWorkPosition;
      }
    });
    this.contractService.getEmployeesByPosition(highPositionid).subscribe(response => {
      this.allSupervisor = response;
      if (this.allSupervisor.length > 0) {
        this.data.supervisorId = this.allSupervisor[0].id;
      }
    });
  }

  supervisorId(id: any) {
    this.data.supervisorId = id;
  }

  projectId(id: any) {
    this.data.projectId = id;
  }

  changeCivilState(civilState: any) {
    this.employee.civilState = civilState;
  }
  changeGenre(genre: any) {
    this.employee.genre = genre;
  }
  cancel() {
    const element = document.getElementById('router-to-employee-list');
    element.click();
  }
}
