import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmployeeAccidentService} from '../../services/accident/employee-accident.service';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {Employeeaccident} from '../../shared/employeeaccident';
import {EmployeeAccidentAddComponent} from '../employee-accident-add/employee-accident-add.component';
import {Observable} from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {EmployeeAccidentDeleteComponent} from '../employee-accident-delete/employee-accident-delete.component';
import {EmployeeAccidentEditComponent} from '../employee-accident-edit/employee-accident-edit.component';
import {Accident} from '../../shared/Accident';
import {AccidentAddComponentComponent} from '../../accident-add-component/accident-add-component.component';




@Component({
  selector: 'app-employee-accident-list',
  templateUrl: './employee-accident-list.component.html',
  styleUrls: ['./employee-accident-list.component.scss']
})
export class EmployeeAccidentListComponent implements OnInit {

  displayedColumns = ['id', 'zonaLesion', 'detalleLesion', 'tipoLesion', 'fullname', 'descriptionAccident', 'actions'];
  exampleDatabase: EmployeeAccidentService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: EmployeeAccidentService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.loadData();

  }

  delete(i: number, id: number, detalleLesion: string, fullname: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(EmployeeAccidentDeleteComponent, {
      data: {id: id, fullname: fullname, detalleLesion: detalleLesion}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }

  addNew(accident: Accident) {
    const dialogRef = this.dialog.open(AccidentAddComponentComponent, {
      data: {accident: accident }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        // this.refreshTable();
        this.loadData();
      }
    });
  }

  edit(i: number, id: number, zonaLesion: string, detalleLesion: string, tipoLesion: string) {
    this.id = id;
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EmployeeAccidentEditComponent, {
      data: {id: id, zonaLesion: zonaLesion, detalleLesion: detalleLesion, tipoLesion: tipoLesion}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        this.refreshTable();
      }
    });
  }


  private refreshTable() {
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }
  }
  public loadData() {
    this.exampleDatabase = new EmployeeAccidentService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class ExampleDataSource extends DataSource<Employeeaccident> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Employeeaccident[] = [];
  renderedData: Employeeaccident[] = [];

  constructor(public _exampleDatabase: EmployeeAccidentService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  connect(): Observable<Employeeaccident[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAll();

    return Observable.merge(...displayDataChanges).map(() => {
      this.filteredData = this._exampleDatabase.data.slice().filter((employeeaccident: Employeeaccident) => {
        const searchStr = (employeeaccident.fullname + employeeaccident.tipoLesion + employeeaccident.zonaLesion + employeeaccident.descriptionAccident).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });
      const sortedData = this.sortData(this.filteredData.slice());
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }
  disconnect() {
  }

  sortData(data: Employeeaccident[]): Employeeaccident[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'fullname': [propertyA, propertyB] = [a.fullname, b.fullname]; break;

      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
