import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from '../../services/employeeService/employee-service.service';
import {ContractService} from '../../services/contractService/contract-service.service';
import {Contract} from '../../shared/contract';

@Component({
  selector: 'app-employee-register-form',
  templateUrl: './employee-register-form.component.html',
  styleUrls: ['./employee-register-form.component.css']
})
export class EmployeeRegisterFormComponent implements OnInit {

  @Output() load: EventEmitter<any>  = new EventEmitter<any>() ;
  @Input('logo') logo: string;
  contract: Contract;
  files;
  imageData = '';
  errorMessage = '';
  data = {
    positionId: 0
  };
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
    birthday: null
  };
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
  constructor(private employeeService: EmployeeService,
              private contractService: ContractService) { }

  ngOnInit() {

  }

  async onSubmit() {
    if (!this.isInvalidForm()) {
      await this.FileTobase64Image(this.files);
      this.employeeService.postEmployee(this.employee).subscribe(result => {
        if (result.id) {
          this.contract = {
            id: 0,
            description: 'prueba',
            initDate: null,
            finishDate: null,
            employeeId: result.id,
            positionId: this.data.positionId
          };
          this.contractService.postContract(this.contract).subscribe(response => {
            console.log(response);
          });
        }
      });
    }
  }

  previewImage(event): void {
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
    if (this.files !== '') {
      if (this.files.size > 2097152) {
        this.errorMessage = 'El tamaño de la imagen no debe exceder los 2MB';
        return true;
      }
      if (this.files.type !== 'image/jpeg' && this.files.type !== 'image/png') {
        this.errorMessage = 'La imagen tiene un formato incorrecto';
        return true;
      }
    }
    return false;
  }

  invalidString(currentString, maxlength, input) {
    if (!currentString) {
      return true;
    }
    if (currentString.length > maxlength) {
      this.errorMessage = 'El ' + input + ' no puede exceder de 50 caracteres';
      return true;
    }
    return false;
  }
}
