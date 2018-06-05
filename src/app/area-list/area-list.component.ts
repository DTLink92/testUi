import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Area} from '../shared/area';
import {AreaService} from '../services/area.service';
import {ProjectService} from '../services/project.service';
import {Project} from '../shared/project';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.scss']
})
export class AreaListComponent implements OnInit {
  areas: Array<Area>;
  projects: Array<Project>;
  displayedColumns;
  private nomProject: string;

  constructor(private projectService: ProjectService,
              private areaService: AreaService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'createdOn', 'detail', 'project', 'options' ];
    this.areaService.getAll().subscribe(areas => {this.areas = areas; } );
    this.projectService.getAll().subscribe(project => {this.projects = project; } );
  }

  editArea(element) {
    console.log('edit area :' + element.id);
    this.router.navigate(['/area-edit/' + element.id]);
  }

  detailArea(element) {
    console.log('mostrarDetalles de Area :' + element.id);
  }

  getProjectsNames(id_project: number): any {
    this.nomProject = 'No asignet';
     this.projects.forEach(value => {
       // Mejorar Esto console.log(value.id === id_project)
       if (value.id === id_project) {
         this.nomProject = value.name;
       }
       });
     return this.nomProject;
  }
  openCreateForm() {
    // this.dialog.open(CreateProjectComponent, {width: '500px', height: '450px'});
    this.router.navigate(['/area-add']);
  }
}
