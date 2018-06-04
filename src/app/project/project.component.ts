import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../services/project.service';
import {Project} from '../shared/project';
import {MatDialog} from '@angular/material';


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
  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService, public dialog: MatDialog
) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'gestion', 'name', 'options'];
    this.projectService.getAll().subscribe(data => {this.projects = data; } );
    this.sub = this.route.params.subscribe(param => {
      this.url = this.route.snapshot.url[0].toString();
      const id = param['id'];
      });
  }
  editMember(row) {
    console.log('INTENTANDO EDITAR ' + row.id);
    this.router.navigate(['/edit-project/' + row.id]);
  }

  detailProject(row) {
    console.log('mostrarDeralle de: ' + row.id);
    this.router.navigate(['/edit-project/' + row.id]);
  }
  openCreateForm() {
   // this.dialog.open(CreateProjectComponent, {width: '500px', height: '450px'});
   this.router.navigate(['/addProject']);
  }

  private redirect() {
    this.router.navigate(['/projects']);

  }
}


