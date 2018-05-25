import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../services/project.service';
import {Project} from '../shared/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Array <Project>;
  sub: Subscription;
  id: string;
  url: any;
  areas: Array<any>;
  displayedColumns;
  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService
  ) { }

  ngOnInit() {
    console.log('Objeto JSON projects: ' + this.projectService.getAll());
    this.displayedColumns = ['id', 'gestion', 'name', 'options'];
    this.projectService.getAll().subscribe(data => {this.projects = data; } );
    this.sub = this.route.params.subscribe(param => {
      this.url = this.route.snapshot.url[0].toString();
      const id = param['id'];
      });
  }
  editMember(row) {
    console.log('INTENTANDO EDITAR ' + row.id);
  }

  detailProject(row) {
    console.log('mostrarDeralle de: ' + row.id);
  }

  deleteProject(row) {
    console.log('BORRAR ESE PROJECT: ' + row.id);

  }
}


