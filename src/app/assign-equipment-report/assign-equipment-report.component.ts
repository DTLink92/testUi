import { Component, OnInit } from '@angular/core';
import {DetailAssignEquipmentService} from '../services/detail-assign-equipment.service';

@Component({
  selector: 'app-assign-equipment-report',
  templateUrl: './assign-equipment-report.component.html',
  styleUrls: ['./assign-equipment-report.component.scss']
})
export class AssignEquipmentReportComponent implements OnInit {

  isDataEquipAvailable = false;
  isDataEquipDateAvailable = false;
  barChartLabelEquip = [];
  barChartLabelEquipDate = [];
  barChartType = 'bar';
  barChartLegend = true;

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartDataEquip: any[] = [
    {data: [], label: 'No. Equipments'},
  ];

  barChartDataEquipDate: any[] = [
    {data: [], label: 'No. Equipments'},
  ];


  chartColors: any[] = [
    {
      backgroundColor: ['#1600FF', '#FF1021', '#40FF23', '#FFBF0B', '#E615FF']
    }];

  equipmentByAssign;
  equipmentByDateAssign;

  constructor(private detailAssignEquipService: DetailAssignEquipmentService) { }

  ngOnInit() {
    this.detailAssignEquipService.reportEquipmentByAssign().subscribe(data => {
      this.equipmentByAssign = data;
      this.createEquipmentByAssign();
    });

    this.detailAssignEquipService.reportEquipmentByDateAssign().subscribe(data => {
      this.equipmentByDateAssign = data;
      this.createEquipmentByDate();
    });
  }

  createEquipmentByAssign() {
    this.equipmentByAssign.forEach(data => {
      this.barChartLabelEquip.push(data[0]);
      this.barChartDataEquip[0].data.push(data[1]);
    });
    this.barChartDataEquip[0].data.push(0);
    this.isDataEquipAvailable = true;
  }

  createEquipmentByDate() {
    this. equipmentByDateAssign.forEach(data => {
      this.barChartLabelEquipDate.push(data[0]);
      this.barChartDataEquipDate[0].data.push(data[1]);
    });
    this.barChartDataEquipDate[0].data.push(0);
    this.isDataEquipDateAvailable = true;
  }

}
