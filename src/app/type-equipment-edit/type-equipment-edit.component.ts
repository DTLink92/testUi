import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import {TypeEquipmentService} from '../services/type-equipment.service';

import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-type-equipment-edit',
  templateUrl: './type-equipment-edit.component.html',
  styleUrls: ['./type-equipment-edit.component.scss']
})
export class TypeEquipmentEditComponent implements OnInit, OnDestroy {
  typeEquipment: any = {};
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private typeEquipmentService: TypeEquipmentService,
              private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.typeEquipmentService.get(id).subscribe((typeEquipment: any) => {
          if (typeEquipment) {
            this.typeEquipment = typeEquipment;
            this.typeEquipment.href = typeEquipment._links.self.href;
            this.giphyService.get(typeEquipment.name).subscribe(url => typeEquipment.giphyUrl = url);
          } else {
            console.log(`TypeEquipment with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
     this.router.navigate(['/type-equipment']);
     }
  /*
      gotoList() {
   if ( this.url.includes('position' )) {
    this.router.navigate(['/positionList']);
        } else {
              this.router.navigate(['/profileList']);
    }
  }

  */

  save(form: NgForm) {
    this.typeEquipmentService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  remove(href) {
    this.typeEquipmentService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


}
