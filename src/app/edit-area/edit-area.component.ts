import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {NgForm} from '@angular/forms';
import {Area} from '../shared/area';
import {AreaService} from '../services/area.service';


@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.scss']
})
export class EditAreaComponent implements OnInit {

  id_area: number;
  area: Area;
  constructor(private areaService: AreaService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.switchMap((params: Params) => this.id_area = params['id']).subscribe();
    this.areaService.getType(this.id_area).subscribe(area => this.area = area );
  }



  saveChanges(form: NgForm) {
    console.log('GUARDAR CAMBIOS DESE UI EDIT-AREA ');
    console.log('estado de area->', this.area);
    this.areaService.save(this.area).subscribe(result => {
      this.route.navigate(['/area-list']);
    }, error => console.log('Error al editar' + error));
  }

  onCancel() {
    this.route.navigate(['/area-list']);
  }

  deleteArea() {
    this.areaService.remove(this.id_area).subscribe(result => {
      console.log( 'remover' ); this.route.navigate(['/area-list']); }, error => console.error( 'error' + error) );
  }
}



