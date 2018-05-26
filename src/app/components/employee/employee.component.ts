import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeService} from '../../services/employeeService/employee-service.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Contract} from '../../shared/contract';
import {ContractService} from '../../services/contractService/contract-service.service';
import {Employee} from '../../shared/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Output() load: EventEmitter<any>  = new EventEmitter<any>();
  imageData;
  files;
  errorMessage = '';
  update = 'Editar ';
  employeeHelper;
  employee = {
    id: 0,
    firstName: '',
    lastName: '',
    ci: 0,
    yearsOld: 0,
    phoneNumber: 0,
    civilState: '',
    dependenciesAmount: 0,
    experience: '',
    birthday: null,
    profileImage: '',
    positionName: '',
    supervisorName: '',
    description: '',
    initDate: null,
    finishDate: null,
    positionId: 0,
    supervisorId: 0,
    contractId: 0,
    salary: 0,
    genre: ''
  };
  genres = [
    { value: 'Masculino'},
    { value: 'Femenino'},
    { value: 'Otro'}
  ];
  data = {
    positionId: 0
  };
  civilStates = [
    { value: 'Soltero/a'},
    { value: 'Casado/a'},
    { value: 'Divorciado/a'},
    { value: 'Viudo/a'}
  ];
  disabled = true;
  firstLoad = true;
  allPositions = [];
  allSupervisor: Array<Employee> = [];
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private contractService: ContractService) { }
  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
      .subscribe(employee => {
        this.employee = employee;
        if(this.employee.birthday != null ){
          this.employee.birthday = this.getDate(employee.birthday.toString());
        }
        if (this.employee.finishDate != null ){
          this.employee.finishDate = this.getDate(employee.finishDate.toString());
        }
        if (this.employee.initDate != null ) {
          this.employee.initDate = this.getDate(employee.initDate.toString());
        }
        this.employeeHelper = employee;
        this.imageData = employee.profileImage;
        this.employeeService.getPositions().subscribe(data => {
          this.allPositions = data;
          if (this.employee.positionId != null) {
            this.positionId(this.employee.positionId.toString());
          }
        });
      });
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
    if (this.invalidNumber(this.employee.salary, 'Salario')) {
      return true;
    }
    if (this.employee.positionId <= 0) {
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

  getDate(date: String) {
    const arrayDate = date.split('T');
    return arrayDate[0];
  }

  previewImage(event): void {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const newTarget: any = e.target;
        this.imageData = newTarget.result;
        this.employee.profileImage = this.imageData;
        this.files = input.files[0];
        this.load.emit({file: this.files, imageData: this.imageData});
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  edit() {
    if (this.disabled) {
      this.disabled = false;
      this.update = 'Cancelar Edicion';
      const element = document.getElementById('delete');
      element.style.display = 'none';
      const buttonsSection = document.getElementById('buttons-section');
      buttonsSection.style.display = 'block';
      const imageSection = document.getElementById('image-button');
      imageSection.style.display = 'block';
    } else {
      this.disabled = true;
      const element = document.getElementById('delete');
      element.style.display = 'block';
      this.employee = this.employeeHelper;
      const buttonsSection = document.getElementById('buttons-section');
      buttonsSection.style.display = 'none';
      location.reload();
    }
  }
  delete() {
    const id = this.employee.id;
    if (this.employee.contractId != null) {
      this.contractService.deleteContract(this.employee.contractId).subscribe(data => {
        this.employeeService.deleteEmployee(this.employee.id).subscribe(response => {
          const element = document.getElementById('router-to-employee-list');
          element.click();
        });
      });
    } else {
      if (this.employee.id != null) {
        this.employeeService.deleteEmployee(this.employee.id).subscribe(response => {
          const element = document.getElementById('router-to-employee-list');
          element.click();
        });
      }
    }
  }
  isDisabled() {
    return this.disabled;
  }
  cancel() {
    this.edit();
  }
  onSubmit() {
    this.employeeService.updateEmployee(this.employee).subscribe(result => {
      const contract = {
        id: this.employee.contractId,
        description: this.employee.description,
        initDate: this.employee.initDate,
        finishDate: this.employee.finishDate,
        employeeId: this.employee.id,
        positionId: this.employee.positionId,
        supervisorId: this.employee.supervisorId,
        employeeFirstName: '',
        employeeLastName: '',
        employeeCi: 0,
        positionName: '',
        salary: 0
      };
      this.contractService.updateContract(contract).subscribe(response => {
        location.reload();
      });
    });
  }
  positionId(id: any) {
    this.employee.positionId = id;
    let highPositionid = 0;
    this.allPositions.forEach(position => {
      if (position.id.toString() === id) {
        highPositionid = position.higherWorkPosition;
      }
    });
    this.contractService.getEmployeesByPosition(highPositionid).subscribe(response => {
      this.allSupervisor = response;
      if (this.allSupervisor.length > 0) {
        if (this.firstLoad) {
          this.firstLoad = false;
        } else {
          this.employee.supervisorId = this.allSupervisor[0].id;
        }
      }
    });
  }
}

