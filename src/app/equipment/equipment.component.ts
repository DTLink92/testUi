import {Component, Inject, OnInit} from '@angular/core';
import {EquipmentService} from '../services/equipment.service';
import {EquipmentDetail} from '../shared/equipmentDetail';
import {Equipment} from '../shared/equipment';
import {Position} from '../shared/position';
import {Subscription} from 'rxjs/Subscription';
import {Project} from '../shared/project';
import {ActivatedRoute, Params} from '@angular/router';
import {Item} from '../shared/item';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
   public equipments; // = Equipment[];
  public idType;
  //  equipments: Array<Equipment>;
  // constructor(private equipmentService: EquipmentService) {
  constructor( private route: ActivatedRoute, private equipmentService: EquipmentService) {
    }
   ngOnInit() {
    this.route.params.forEach((params: Params) => {
        this.idType = params['id'];
        this.equipmentService.getAllType(this.idType).subscribe(equipments => this.equipments = equipments);
      }
    );

   }
 }

