import { Component, OnInit } from '@angular/core';
import {Project} from '../shared/project';
import {LoginComponent} from '../login/login.component';
import {MatDialogRef} from '@angular/material';
import {ProjectService} from '../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  public project = {name: '', gestion: ''};
  constructor(public dialogRef: MatDialogRef<LoginComponent>, public projectService: ProjectService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log( 'create User con datos:' + this.project.name + '' + this.project.gestion);
    this.projectService.save(this.project).subscribe(result => {
      this.redirect();
    }, error => console.log('Error al crear' + error));
    console.log( 'msg-postAddProject');
    this.dialogRef.close();

  }

  private redirect() {
    this.router.navigate(['/home']);
    this.router.navigate(['/projects']);
  }
}
