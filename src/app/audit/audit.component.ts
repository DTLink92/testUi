import { Component, OnInit } from '@angular/core';
import {Audit} from '../shared/audit';
import {AuditService} from '../services/audit.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  audits: Array<Audit>;
  displayedColumns;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private auditService: AuditService) { }

  ngOnInit() {
    this.displayedColumns = ['auditHistoryId',
                             'tableName',
                             'columnName',
                             'id',
                             'date',
                             'oldvalue',
                             'newValue',
                             'modifiedBy'];
    this.auditService.getAll().subscribe(value => this.audits = value );
  }
}
