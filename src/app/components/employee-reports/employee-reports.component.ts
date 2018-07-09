import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {ContractService} from '../../services/contractService/contract-service.service';

@Component({
  selector: 'app-employee-reports',
  templateUrl: './employee-reports.component.html',
  styleUrls: ['./employee-reports.component.scss']
})
export class EmployeeReportsComponent implements OnInit {

  isDataGenreAvailable = false;
  isDataPositionAvailable = false;
  isDataSalaryAvailable = false;
  barChartLabelsGenre = [];
  barChartLabelsPosition = [];
  barChartType = 'bar';
  barChartLegend = true;

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartDataGenre: any[] = [
    {data: [], label: 'No. Empleados'},
  ];

  barChartDataPosition: any[] = [
    {data: [], label: 'No. Empleados'},
  ];

  chartColors: any[] = [
    {
      backgroundColor: ['#1600FF', '#FF1021', '#40FF23', '#FFBF0B', '#E615FF',
        '#160AFA', '#FF103A', '#40EF24', '#FFEF0C', '#E515CF',
        '#160BFB', '#FF104F', '#40DF25', '#FFFF0D', '#E415AF',
        '#160CFC', '#FF105B', '#40CF26', '#FFGF0E', '#E315BF']
    }];

  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';

  employeeBySalary;
  employeeByGenre;
  reportEmployeeByPosition;
  constructor(private contractService: ContractService) { }
  ngOnInit() {
    this.contractService.reportEmployeeByPosition().subscribe(data => {
      this.reportEmployeeByPosition = data;
      this.createEmployeeByPositionChart();
    });
    this.contractService.reportEmployeeByGenre().subscribe(data => {
      this.employeeByGenre = data;
      this.createEmployeeByGenreChart();
    });
    this.contractService.reportEmployeeBySalary().subscribe(data => {
      this.employeeBySalary = data;
      this.createEmployeeBySalaryChart();
    });
  }
  createEmployeeBySalaryChart() {
    this.employeeBySalary.forEach(data => {
      this.doughnutChartLabels.push(data[0]);
      this.doughnutChartData.push(data[1]);
    });
    this.isDataSalaryAvailable = true;
  }
  createEmployeeByGenreChart() {
    this.employeeByGenre.forEach(data => {
      this.barChartLabelsGenre.push(data[0]);
      this.barChartDataGenre[0].data.push(data[1]);
    });
    this.barChartDataGenre[0].data.push(0);
    this.isDataGenreAvailable = true;
  }
  createEmployeeByPositionChart() {
    this.reportEmployeeByPosition.forEach(data => {
      this.barChartLabelsPosition.push(data[0]);
      this.barChartDataPosition[0].data.push(data[1]);
    });
    this.barChartDataPosition[0].data.push(0);
    this.isDataPositionAvailable = true;
  }
}
