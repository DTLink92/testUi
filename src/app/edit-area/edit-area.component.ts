import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../services/project.service';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Project} from '../shared/project';
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
  projects: Array <Project>;
  lista_projejcts: TipoProject[]; // para el select type de projects
  private nuevoTipo: TipoProject; // variable temporal
  constructor( private areaService: AreaService,
               private projectService: ProjectService,
               private activatedRoute: ActivatedRoute,
               private route: Router) { }

  ngOnInit() {
    this.activatedRoute.params.switchMap((params: Params) => this.id_area = params['id']).subscribe();
    this.areaService.getType(this.id_area).subscribe(area => this.area = area);
    this.projectService.getAll().subscribe( projects => {
      this.projects = projects; });
    this.lista_projejcts = [];
    this.setListProjects();

  }

  private setListProjects() {
    this.nuevoTipo = this.getNuevoTipoProject();
    console.log('TAMANIO DE PROJECTS'+ this.projects.length);
     this.projects.forEach(project => {
       console.log('Se obtubo lista de projects');
       this.nuevoTipo.id = project.id;
       this.nuevoTipo.name = project.name;
       this.lista_projejcts.push(this.nuevoTipo);
    });
  }

  private getNuevoTipoProject(): TipoProject {
    return {
      id: 0,
      name: ''
    };
  }
}

export interface TipoProject {
  id: number;
  name: string;
}


