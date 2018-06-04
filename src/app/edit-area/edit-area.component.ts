import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../services/project.service';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Project} from '../shared/project';
import {NgForm} from '@angular/forms';
import {Area} from '../shared/area';
import {AreaService} from '../services/area.service';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.scss']
})
export class EditAreaComponent implements OnInit {

  id_area: number;
  area: Area;
  projects: Array<Project>;
  lista_projejcts: Array<TipoProject>; // para el select type de projects
  temp_nuevo: TipoProject;
  selectedValue: string;
  selected_project_value: number;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private areaService: AreaService,
              private projectService: ProjectService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.switchMap((params: Params) => this.id_area = params['id']).subscribe();
    this.areaService.getType(this.id_area).subscribe(area => {this.area = area; this.selected_project_value = this.getAreaIdProject(); } );
    this.lista_projejcts = [];
    this.projectService.getAll().subscribe(data => {
      this.projects = data;
      this.projects.forEach(value => { this.temp_nuevo = this.getNuevoTipoProject();
          this.temp_nuevo.id = value.id;
          this.temp_nuevo.name = value.name;
          this.lista_projejcts.push(this.temp_nuevo);
      });
    });
  }

  private getAreaIdProject(): number {
    return this.area.id_project;
  }

  // private setListProjects() {
  //   console.log('Armando listProject');
  //
  //
  //   for ( let item of this.projects ) {
  //     console.log('iterando con project', project);
  //     const nuevoTipo: TipoProject = this.getNuevoTipoProject();
  //     nuevoTipo.id = project.id;
  //     nuevoTipo.name = project.name;
  //     this.lista_projejcts.push(nuevoTipo);
  //   }

   // }

  private getNuevoTipoProject(): TipoProject {
    return {
      id: 0,
      name: ''
    };
  }


  saveChanges(form: NgForm) {
    console.log('GUARDAR CAMBIOS DESE UI EDIT-AREA ');
    console.log('estado de area->', this.area);
    this.area.id_project = this.selected_project_value;
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

export interface TipoProject {
  id: number;
  name: string;
}


