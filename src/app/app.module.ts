

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {baseURL} from './shared/baseurl';

import {AppComponent} from './app.component';

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
import { PositionComponent } from './position/position.component';
import { PositionService} from './services/position.service';
import { PositionTypeEvaluatorService} from './services/position-type-evaluator.service';
import { PositionTypeEvaluatorComponent } from './position-type-evaluator/position-type-evaluator.component';
import { PositionTypeEvaluatorListComponent } from './position-type-evaluator-list/position-type-evaluator-list.component';
import { PositionTypeEvaluatorEditComponent } from './position-type-evaluator-edit/position-type-evaluator-edit.component';
import { PositionListComponent } from './position-list/position-list.component';

// Service
import {EmployeeService} from './services/employeeService/employee-service.service';
import {ContractService} from './services/contractService/contract-service.service';
// Components Imports
import { EmployeeListComponent } from './components/employees-list/employees-list.component';
import { EmployeeRegisterFormComponent } from './components/employee-register-form/employee-register-form.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TypeEquipmentComponent } from './type-equipment/type-equipment.component';

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
    PositionListComponent
    LoginComponent,
    EmployeeListComponent,
    EmployeeRegisterFormComponent,
    EmployeeComponent,
    TypeEquipmentComponent
  ],
  imports: [
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
    HttpClientModule
  ],
  providers: [
    ItemService,
    EmployeeService,
    ContractService,
    PositionService,
    PositionTypeEvaluatorService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
