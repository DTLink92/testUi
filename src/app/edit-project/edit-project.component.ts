
import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../services/project.service';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Project} from '../shared/project';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  id: number;
  project: Project;
  constructor( private serviceProject: ProjectService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
   this.route.params.switchMap(( params: Params) => this.id = params['id']).subscribe();
   // console.log('obteniendo project con id: ' + this.id);
   this.serviceProject.getType(this.id).subscribe( project => this.project = project );
  }

  saveChanges(form: NgForm) {
    if ( form['estimateddate']) {
      this.project.estimatedDate = form['estimateddate'].toString();
    } else {
      console.log('No se modifico estimated date');
    }
    if ( form['deliverydate']) {
      this.project.deliveryDate = form['deliverydate'].toString();
    } else {
      console.log('No se modifico estimated date');
    }
    console.log('GUARDAR CAMBIOS DESE UI EDIT-project ');
    console.log('estado de project->', this.project);
    this.serviceProject.save(this.project).subscribe(result => {
      this.router.navigate(['/projects']);
    }, error => console.log('Error al editar' + error));
  }
  onCancel() {
    this.router.navigate(['/projects']);
  }

  deleteProject() {
    console.log('BORRAR ESE PROJECT: ' + this.id);
    this.serviceProject.remove(this.id).subscribe(result => {
      console.log( 'remover' ); this.router.navigate(['/projects']); }, error => console.error( 'error' + error) );
    console.log('Se borro project con id : ' + this.id);
  }
}
