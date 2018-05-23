import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignEquipmentService} from '../services/assign-equipment.service';
import {Employee} from '../shared/employee';
import {AssignEquipment} from '../shared/assignEquipment';

@Component({
  selector: 'app-assign-equipment',
  templateUrl: './assign-equipment.component.html',
  styleUrls: ['./assign-equipment.component.scss']
})
export class AssignEquipmentComponent implements OnInit {

  profile: any = {};
  url: any = {};
  employee: Employee;
  supervisor: Employee;
  assignEquipment: AssignEquipment;
  /*equipments: Array<Equipment>;*/

  constructor(private route: ActivatedRoute, private router: Router, private assignEquipmentService: AssignEquipmentService) {

  }

  ngOnInit() {
  }

  save(form: NgForm) {
    this.assignEquipmentService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  gotoList() {
    if ( this.url.includes('position' )) {
      this.router.navigate(['/positionList']);
    } else {
      this.router.navigate(['/profileList']);
    }
  }

  /*remove(id) {
    this.assignEquipmentService.(id).subscribe(result => {
      console.log('entro aqui remove');
      this.gotoList();
    }, error => console.error(error));
  }*/
}
