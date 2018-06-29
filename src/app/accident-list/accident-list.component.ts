import {AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DataSource} from '@angular/cdk/table';
import {AccidentService} from '../services/accident-register/accident.service';
import {Accident} from '../shared/Accident';
import {EmployeeAccidentService} from '../services/accident/employee-accident.service';
import {AccidentCauseService} from '../services/accident/accident-cause.service';
import {Employeeaccident} from '../shared/employeeaccident';
import {EmployeeAccidentAddComponent} from '../employee-accident/employee-accident-add/employee-accident-add.component';
import {AccidentAddComponentComponent} from '../accident-add-component/accident-add-component.component';


@Component({
  selector: 'app-accident-list',
  templateUrl: './accident-list.component.html',
  styleUrls: ['./accident-list.component.scss']
})
export class AccidentListComponent implements OnInit  {

  displayedColumns = ['id', 'place_accident', 'type', 'area', 'actions'];
  exampleDatabase: AccidentService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;
  title: 'Accidente';

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: AccidentService,
              public employeeService: EmployeeAccidentService,
              public causeService: AccidentCauseService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  public total_accidentes = 0;
  public total_employee_accident = 0;
  public total_causas = 0;
  public radius = 100;
  ngOnInit() {
    this.loadData();
    // this.employeeService.getAllCount().subscribe(value => this.total_employee_accident = value.length);
    this.total_employee_accident = 0;
    // this.causeService.getCauses(0).subscribe(value => this.total_causas = value.length);
    this.total_causas = 0;
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
/*    this.id = id;
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(AccidentEditComponent, {
      data: {id: id, zonaLesion: zonaLesion, detalleLesion: detalleLesion, tipoLesion: tipoLesion}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        this.refreshTable();
      }
    }); */
  }

  public loadData() {
    this.exampleDatabase = new AccidentService(this.httpClient);
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

export class ExampleDataSource extends DataSource<Accident> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Accident[] = [];
  renderedData: Accident[] = [];

  constructor(public _exampleDatabase: AccidentService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
  connect(): Observable<Accident[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAll();

    return Observable.merge(...displayDataChanges).map(() => {
      this.filteredData = this._exampleDatabase.data.slice().filter((accident: Accident) => {
        const searchStr = (accident.place_accident + accident.type.name_type_accident + accident.area.name).toLowerCase();
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

  sortData(data: Accident[]): Accident[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'place_accident': [propertyA, propertyB] = [a.place_accident, b.place_accident]; break;

      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
