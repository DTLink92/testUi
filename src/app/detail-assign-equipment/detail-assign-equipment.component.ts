import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AssignEquipmentService} from '../services/assign-equipment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../services/employeeService/employee-service.service';
import {EquipmentService} from '../services/equipment.service';
import {NgForm} from '@angular/forms';
import {DetailAssignEquipmentService} from '../services/detail-assign-equipment.service';

@Component({
  selector: 'app-detail-assign-equipment',
  templateUrl: './detail-assign-equipment.component.html',
  styleUrls: ['./detail-assign-equipment.component.scss']
})
export class DetailAssignEquipmentComponent implements OnInit, OnDestroy {

  assignEquip: any = {};
  sub: Subscription;
  url: any = {};
  employee: any = {};
  equipments: Array<any>;
  detAssignEquip: any = {};
  selectedOption: any = {};
  selectedOptions: string[];

  constructor(private route: ActivatedRoute, private router: Router,
              private assignEquipmentService: AssignEquipmentService,
              private detailAssignEquipmentService: DetailAssignEquipmentService,
              private employeeService: EmployeeService,
              private equipmentService: EquipmentService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.url = this.route.snapshot.url[0].toString();
      const id = params['id'];
      const idAss = params['idAss'];
      const idDet = params['idDet'];
        if (id) {
          console.log('ESTE ES EL ID: ' + id);
          this.assignEquipmentService.getAssignEquipment(id).subscribe((assignEquip: any) => {
            if (assignEquip) {
              this.assignEquip = assignEquip;
              this.selectedOption = this.assignEquip.id;
              console.log('Este es el ID de assign que se muestra en formulario>' + this.assignEquip.id);
            } else {
              console.log(`No encuentra asignacionEquipo por ID`);
              this.gotoList();
            }
          });
        }

      if (idAss) {
        console.log('ESTE ES EL ID: ' + idAss);
        this.assignEquipmentService.getAssignEquipment(idAss).subscribe((assignEquip: any) => {
          if (assignEquip) {
            this.assignEquip = assignEquip;
            this.selectedOption = this.assignEquip.id;
            console.log('Este es el ID de assign que se muestra en formulario>' + this.assignEquip.id);
          } else {
            console.log(`No encuentra asignacionEquipo por ID`);
            this.gotoList();
          }
        });
      }

      if (idDet) {
        console.log('ESTE ES EL ID: ' + idDet);
        this.detailAssignEquipmentService.get(idDet).subscribe((detAssignEquip: any) => {
          if (detAssignEquip) {
            this.detAssignEquip = detAssignEquip;
            this.selectedOption = this.detAssignEquip.idAssignEquip;
            console.log('Este es el ID de assign que se muestra en formulario>' + this.assignEquip.id);
          } else {
            console.log(`No encuentra asignacionEquipo por ID`);
            this.gotoList();
          }
        });
      }

      this.equipmentService.getAll().subscribe(data => {
        this.equipments = data;
      });

      /*
      this.selectedOptions = this.equipments
        .filter(item => item.selected)
        .map(item => item.name);*/

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/employee-list-assignequip']);
  }
  gotoListViewDetail() {
    this.router.navigate(['/view-detail-AssignEquip' + '/' + this.assignEquip.id]);
  }

  save(form: NgForm) {
    this.detailAssignEquipmentService.save(form).subscribe(result => {
      this.gotoListViewDetail();
    }, error => console.error('SALIO ERROR save detail' + error));
  }

  remove(id) {
    this.detailAssignEquipmentService.remove(id).subscribe(result => {
      this.gotoListViewDetail();
    }, error => console.error(error));
  }

  /* determine selected options
  onAreaListControlChanged(list){
    this.selectedOptions = list.selectedOptions.selected.map(item => item.value);
  }*/

}
