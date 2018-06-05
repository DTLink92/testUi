import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../shared/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  public project: {name: string, gestion: string};
  constructor( private projectsService: ProjectService,
               private route: ActivatedRoute,
               private router: Router
               ) { }

  ngOnInit() {
  this.project = {name: '', gestion: ''};

  }

  onSubmit() {
    console.log( 'create User con datos:' + this.project.name + '' + this.project.gestion);
    this.projectsService.save(this.project).subscribe(result => {
      this.redirect();
    }, error => console.log('Error al crear' + error));
    console.log( 'msg-postAddProject');
  }


  private redirect() {
    this.router.navigate(['/projects']);
  }
  onCancel() {
    this.project = {name: '', gestion: ''};
    this.redirect();
  }

}
