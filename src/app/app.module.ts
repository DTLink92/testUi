import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {baseURL} from './shared/baseurl';
import { ChartsModule } from 'ng2-charts';
import {AppComponent} from './app.component';
import { GiphyService } from './shared/giphy/giphy.service';

import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {CatalogComponent} from './catalog/catalog.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {ItemService} from './services/item.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// Service
import {EmployeeService} from './services/employeeService/employee-service.service';
import {ContractService} from './services/contractService/contract-service.service';
import {PositionService} from './services/position.service';
import {PositionTypeEvaluatorService} from './services/position-type-evaluator.service';
import {PositionRecruitmentProfileService} from './services/position-recruitment-profile.service';

import { PositionComponent } from './position/position.component';
import { PositionTypeEvaluatorComponent } from './position-type-evaluator/position-type-evaluator.component';
import { PositionTypeEvaluatorListComponent } from './position-type-evaluator-list/position-type-evaluator-list.component';
import { PositionTypeEvaluatorEditComponent } from './position-type-evaluator-edit/position-type-evaluator-edit.component';
import { PositionListComponent } from './position-list/position-list.component';
import { RouterModule, Routes } from '@angular/router';
import {TypeEquipmentService} from './services/type-equipment.service';

import {AccidentService} from './services/accident-register/accident.service';
import {AccidentTypeService} from './services/accident-register/accident-type.service';
import {AccidentCauseService} from './services/accident/accident-cause.service';
import {AccidentCauseGroupService} from './services/accident-register/accident-cause-group.service';

// Components Imports
import {EmployeeListComponent} from './components/employees-list/employees-list.component';
import {EmployeeRegisterFormComponent} from './components/employee-register-form/employee-register-form.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {PositionRecruitmentProfileComponent} from './position-recruitment-profile/position-recruitment-profile.component';
import {PositionRecruitmentProfileListComponent} from './position-recruitment-profile-list/position-recruitment-profile-list.component';
import {TypeEquipmentComponent} from './type-equipment/type-equipment.component';
import {AssignEquipmentComponent} from './assign-equipment/assign-equipment.component';
import {EmployeeListAssignequipComponent} from './employee-list-assignequip/employee-list-assignequip.component';
import {EmployeeListWithequipComponent} from './employee-list-withequip/employee-list-withequip.component';
import {ProjectListAssignequipComponent} from './project-list-assignequip/project-list-assignequip.component';
import {AssignEquipmentService} from './services/assign-equipment.service';
import {PositionEquipmentService} from './services/position-equipment.service';
import {DetailAssignEquipmentService} from './services/detail-assign-equipment.service';

import {AccidentRecordComponent} from './accident-record/accident-record.component';
import {ProjectComponent} from './project/project.component';
import {ProjectService} from './services/project.service';

import { CarListComponent } from './car-list/car-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { AccidentCauseGroupComponent } from './accident-cause-group/accident-cause-group.component';
import { AccidentListComponent } from './accident-list/accident-list.component';
import { AccidentTypeComponent } from './accident-type/accident-type.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { TypeEquipmentEditComponent } from './type-equipment-edit/type-equipment-edit.component';
import {EquipmentService} from './services/equipment.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/type-equipment', pathMatch: 'full' },
  {
    path: 'type-equipment',
    component: TypeEquipmentComponent
  },
  {
    path: 'type-equipment-add',
    component: TypeEquipmentEditComponent
  },
  {
    path: 'type-equipment-edit/:id',
    component: TypeEquipmentEditComponent
  }
];


import { DetailAssignEquipmentComponent } from './detail-assign-equipment/detail-assign-equipment.component';

import {EmployeeAccidentService} from './services/accident/employee-accident.service';

import {EmployeeAccidentListComponent} from './employee-accident/employee-accident-list/employee-accident-list.component';
import {EmployeeAccidentAddComponent} from './employee-accident/employee-accident-add/employee-accident-add.component';
import {EmployeeAccidentEditComponent} from './employee-accident/employee-accident-edit/employee-accident-edit.component';
import {EmployeeAccidentDeleteComponent} from './employee-accident/employee-accident-delete/employee-accident-delete.component';
import { PositionEmployeeReportComponent } from './position-employee-report/position-employee-report.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import {AreaService} from './services/area.service';
import { AreaListComponent } from './area-list/area-list.component';
import { EditAreaComponent } from './edit-area/edit-area.component';
import { EmployeeReportsComponent } from './components/employee-reports/employee-reports.component';
import { ListPositionEquipmentComponent } from './list-position-equipment/list-position-equipment.component';
import { ListDetailPositionequipmentComponent } from './list-detail-positionequipment/list-detail-positionequipment.component';
import { AssignPositionEquipmentComponent } from './assign-position-equipment/assign-position-equipment.component';
import { AssignEquipmentReportComponent } from './assign-equipment-report/assign-equipment-report.component';
import { AddAreaComponent } from './add-area/add-area.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ItemDetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PositionComponent,
    PositionTypeEvaluatorComponent,
    PositionTypeEvaluatorListComponent,
    PositionTypeEvaluatorEditComponent,
    PositionListComponent,
    LoginComponent,
    EmployeeListComponent,
    EmployeeRegisterFormComponent,
    EmployeeComponent,
    TypeEquipmentComponent,
    PositionRecruitmentProfileComponent,
    PositionRecruitmentProfileListComponent,
    AssignEquipmentComponent,
    EmployeeListAssignequipComponent,
    EmployeeListWithequipComponent,
    ProjectListAssignequipComponent,
    AccidentRecordComponent,
    ProjectComponent,
    CarListComponent,
    CreateProjectComponent,
    AccidentCauseGroupComponent,
    AccidentListComponent,
    AccidentTypeComponent,
    ProjectListAssignequipComponent,
    EquipmentComponent,
    TypeEquipmentEditComponent,
    DetailAssignEquipmentComponent,
    EmployeeAccidentListComponent,
    EmployeeAccidentAddComponent,
    EmployeeAccidentEditComponent,
    EmployeeAccidentDeleteComponent,
    EmployeeReportsComponent,
    PositionEmployeeReportComponent,
    ListPositionEquipmentComponent,
    ListDetailPositionequipmentComponent,
    AssignPositionEquipmentComponent,
    AssignEquipmentReportComponent,
    AddProjectComponent,
    EditProjectComponent,
    AreaListComponent,
    EditAreaComponent,
    AddAreaComponent
  ],

  imports: [
    ChartsModule,
    BrowserModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule,
    BrowserAnimationsModule,
    FlexLayoutModule, AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ItemService,
    EmployeeService,
    ContractService,
    PositionService,
    PositionTypeEvaluatorService,
    PositionRecruitmentProfileService,
    AssignEquipmentService,
    DetailAssignEquipmentService,
    PositionEquipmentService,
    ProjectService,
    TypeEquipmentService,
    GiphyService,
    {provide: 'BaseURL', useValue: baseURL},
    EmployeeAccidentService,
    AccidentCauseService,
    AccidentService,
    AccidentTypeService,
    AccidentCauseService,
    AccidentTypeService,
    AccidentCauseGroupService,
    EquipmentService,
    AreaService
  ],
  entryComponents: [
    LoginComponent,
    CreateProjectComponent,
    EmployeeAccidentAddComponent,
    EmployeeAccidentEditComponent,
    EmployeeAccidentDeleteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
