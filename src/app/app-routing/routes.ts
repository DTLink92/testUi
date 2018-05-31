import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {CatalogComponent} from '../catalog/catalog.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {EmployeeListComponent} from '../components/employees-list/employees-list.component';
import {EmployeeRegisterFormComponent} from '../components/employee-register-form/employee-register-form.component';
import {EmployeeComponent} from '../components/employee/employee.component';
import {PositionComponent} from '../position/position.component';
import {PositionListComponent} from '../position-list/position-list.component';
import {PositionTypeEvaluatorComponent} from '../position-type-evaluator/position-type-evaluator.component';
import {PositionTypeEvaluatorListComponent} from '../position-type-evaluator-list/position-type-evaluator-list.component';
import {PositionTypeEvaluatorEditComponent} from '../position-type-evaluator-edit/position-type-evaluator-edit.component';
import {PositionRecruitmentProfileListComponent} from '../position-recruitment-profile-list/position-recruitment-profile-list.component';
import {PositionRecruitmentProfileComponent} from '../position-recruitment-profile/position-recruitment-profile.component';

import {TypeEquipmentComponent} from '../type-equipment/type-equipment.component';
import {AssignEquipmentComponent} from '../assign-equipment/assign-equipment.component';
import {EmployeeListAssignequipComponent} from '../employee-list-assignequip/employee-list-assignequip.component';
import {EmployeeListWithequipComponent} from '../employee-list-withequip/employee-list-withequip.component';
import {ProjectListAssignequipComponent} from '../project-list-assignequip/project-list-assignequip.component';
import {ProjectComponent} from '../project/project.component';
import {EmployeeReportsComponent} from '../components/employee-reports/employee-reports.component';

import {EquipmentComponent} from '../equipment/equipment.component';
import {DetailAssignEquipmentComponent} from '../detail-assign-equipment/detail-assign-equipment.component';

import {AccidentTypeComponent} from '../accident-type/accident-type.component';
import {AccidentCauseGroupComponent} from '../accident-cause-group/accident-cause-group.component';
import {AccidentListComponent} from '../accident-list/accident-list.component';
import {AccidentRecordComponent} from '../accident-record/accident-record.component';
import {PositionEmployeeReportComponent} from '../position-employee-report/position-employee-report.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'position-edit/:id', component: PositionComponent},
  {path: 'position-add', component: PositionComponent},
  {path: 'positionList', component: PositionListComponent},
  {path: 'profile-edit/:id', component: PositionRecruitmentProfileComponent},
  {path: 'position-profile-edit/:id', component: PositionRecruitmentProfileComponent},
  {path: 'position-profile-add/:positionId', component: PositionRecruitmentProfileComponent},
  {path: 'profile-add', component: PositionRecruitmentProfileComponent},
  {path: 'profileList', component: PositionRecruitmentProfileListComponent},
  {path: 'positionTypeEvaluator', component: PositionTypeEvaluatorComponent},
  {path: 'positionTypeEvaluatorList', component: PositionTypeEvaluatorListComponent},
  {path: 'position-report/:id', component: PositionEmployeeReportComponent},
  {path: 'type-evaluator-edit/:id', component: PositionTypeEvaluatorEditComponent},
  {path: 'type-evaluator-add', component: PositionTypeEvaluatorEditComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'employees-list', component: EmployeeListComponent},
  {path: 'employee/:id', component: EmployeeComponent},
  {path: 'employee-creation-form', component: EmployeeRegisterFormComponent},
  {path: 'type-equipment', component: TypeEquipmentComponent},
  {path: 'assign-equipment-add', component: AssignEquipmentComponent},
  {path: 'assign-equipment-edit/:id', component: AssignEquipmentComponent},
  {path: 'employee-list-assignequip', component: EmployeeListAssignequipComponent},
  {path: 'employee-list-withequip', component: EmployeeListWithequipComponent},
  {path: 'assign-equip-employee/:id', component: DetailAssignEquipmentComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'project-list-assignequip', component: ProjectListAssignequipComponent},
  {path: 'equipment', component: EquipmentComponent},
  {path: 'accident-type', component: AccidentTypeComponent},
  {path: 'accident-record', component: AccidentRecordComponent},
  {path: 'accident-list', component: AccidentListComponent},
  {path: 'accident-cause-group', component: AccidentCauseGroupComponent},
  {path: 'employee-reports', component: EmployeeReportsComponent},
  {path: 'equipment/:id', component: EquipmentComponent},
  {path: 'type-equipment-view/:id', component: EquipmentComponent},

];

