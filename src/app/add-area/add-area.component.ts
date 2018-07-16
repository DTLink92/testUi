import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {NgForm} from '@angular/forms';
import {Area} from '../shared/area';
import {AreaService} from '../services/area.service';
import {forEach} from '@angular/router/src/utils/collection';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.scss']
})
export class AddAreaComponent implements OnInit {

  public area: {name: string, detail: string};

  constructor( // private projectsService: ProjectService,
              private areaService: AreaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.area = {name: '', detail: ''};
  }

  onSubmit() {
    console.log( 'create area con datos:' + this.area.name + '' + this.area.detail);
    this.areaService.save(this.area).subscribe(result => {
      this.redirect();
    }, error => console.log('Error al crear' + error));
    console.log( 'msg-postAddProject');
  }
  onCancel() {
    this.area = {name: '', detail: ''};
    this.redirect();
  }

  private redirect() {
    this.router.navigate(['/area-list']);
  }


}

