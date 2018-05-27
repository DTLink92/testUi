import { Component, OnInit } from '@angular/core';
import {TypeEquipmentService} from '../services/type-equipment.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-type-equipment',
  templateUrl: './type-equipment.component.html',
  styleUrls: ['./type-equipment.component.scss']
})
export class TypeEquipmentComponent implements OnInit {
  typeEquipments: Array<any>;
  constructor(private typeEquipmentService: TypeEquipmentService, private giphyService: GiphyService) { }
  selectedValue: string;


  ngOnInit() {
    this.typeEquipmentService.getAll().subscribe(data => {
      this.typeEquipments = data;
      for (const typeEquipment of this.typeEquipments) {
        this.giphyService.get(typeEquipment.name).subscribe(url => typeEquipment.giphyUrl = url);
      }
    });
  }

}
