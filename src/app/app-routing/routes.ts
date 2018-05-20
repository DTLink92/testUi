import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {CatalogComponent} from '../catalog/catalog.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {EmployeeListComponent} from '../components/employees-list/employees-list.component';
import {EmployeeRegisterFormComponent} from '../components/employee-register-form/employee-register-form.component';
import {EmployeeComponent} from '../components/employee/employee.component';
import {TypeEquipmentComponent} from '../type-equipment/type-equipment.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'employees-list', component: EmployeeListComponent},
  {path: 'employee/:id', component: EmployeeComponent},
  {path: 'employee-creation-form', component: EmployeeRegisterFormComponent},
  {path: 'type-equipment', component: TypeEquipmentComponent}
  ];
