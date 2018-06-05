import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../services/project.service';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Project} from '../shared/project';
import {NgForm} from '@angular/forms';
import {Area} from '../shared/area';
import {AreaService} from '../services/area.service';
import {forEach} from '@angular/router/src/utils/collection';
import {TipoProject} from '../edit-area/edit-area.component';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.scss']
})
export class AddAreaComponent implements OnInit {

  public area: {name: string, detail: string, id_project: number};
  projectControl = new FormControl('', [Validators.required]);
  projects: Array<Project>;
  lista_projejcts: Array<TipoProject>; // para el select type de projects
  temp_nuevo: TipoProject;
  selectedValue: string;
  selected_project_value: number;

  constructor(private projectsService: ProjectService,
              private areaService: AreaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.area = {name: '', detail: '', id_project: 0};
    this.lista_projejcts = [];
    this.projectsService.getAll().subscribe(data => {
      this.projects = data;
      this.projects.forEach(value => { this.temp_nuevo = this.getNuevoTipoProject();
        this.temp_nuevo.id = value.id;
        this.temp_nuevo.name = value.name;
        this.lista_projejcts.push(this.temp_nuevo);
      });
    });
  }

  onSubmit() {
    console.log( 'create area con datos:' + this.area.name + '' + this.area.detail + '' + this.area.id_project);
    if ( this.selected_project_value) {
      this.area.id_project = this.selected_project_value;
    } else {
      console.log('Se debe seleccionar una project');
    }
    this.areaService.save(this.area).subscribe(result => {
      this.redirect();
    }, error => console.log('Error al crear' + error));
    console.log( 'msg-postAddProject');
  }
  onCancel() {
    this.area = {name: '', detail: '', id_project: 0};
    this.redirect();
  }

  private redirect() {
    this.router.navigate(['/area-list']);
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
