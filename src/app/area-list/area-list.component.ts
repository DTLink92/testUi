import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Area} from '../shared/area';
import {AreaService} from '../services/area.service';


@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.scss']
})
export class AreaListComponent implements OnInit {
  areas: Array<Area>;
  displayedColumns;

  constructor(private areaService: AreaService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'createdOn', 'detail', 'options' ];
    this.areaService.getAll().subscribe(areas => {this.areas = areas; } );
  }

  editArea(element) {
    console.log('edit area :' + element.id);
    this.router.navigate(['/area-edit/' + element.id]);
  }

  detailArea(element) {
    console.log('mostrarDetalles de Area :' + element.id);
  }

  openCreateForm() {
    this.router.navigate(['/area-add']);
  }
}
