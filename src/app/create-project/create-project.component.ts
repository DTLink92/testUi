import { Component, OnInit } from '@angular/core';
import {Project} from '../shared/project';
import {LoginComponent} from '../login/login.component';
import {MatDialogRef} from '@angular/material';
import {ProjectService} from '../services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  public project = {name: '', gestion: ''};
  constructor(public dialogRef: MatDialogRef<LoginComponent>, public projectService: ProjectService ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log( 'create User con datos:' + this.project.name + '' + this.project.gestion);
    this.projectService.save(this.project);
    console.log( 'msg-postAddProject');
    this.dialogRef.close();

  }
}
