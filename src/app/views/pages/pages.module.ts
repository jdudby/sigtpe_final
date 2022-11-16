import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { Logininterceptor } from 'src/app/middlewares/logininterceptor.interceptor';
import { SearchdefendantComponent } from './searchdefendant/searchdefendant.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdddefendantComponent } from './adddefendant/adddefendant.component';
import { NewcaseComponent } from './newcase/newcase.component';
import { SearchdossierComponent } from './searchdossier/searchdossier.component';
import { ViewdossierComponent } from './viewdossier/viewdossier.component';
import { ViewdefendantComponent } from './viewdefendant/viewdefendant.component';
import { EditcasierComponent } from './editcasier/editcasier.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AudienceComponent } from './audience/audience.component';
import { JugementComponent } from './jugement/jugement.component';
import { AssignationComponent } from './assignation/assignation.component';
import { AudiencelistComponent } from './audiencelist/audiencelist.component';
import { ProcessingcaselistComponent } from './processingcaselist/processingcaselist.component';
import { WaitingcaselistComponent } from './waitingcaselist/waitingcaselist.component';
import {MatCardModule} from'@angular/material/card';
import {MatDividerModule} from'@angular/material/divider';
import {MatProgressBarModule} from'@angular/material/progress-bar';
import { ViewaudienceComponent } from './viewaudience/viewaudience.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    SearchdefendantComponent,
    AdddefendantComponent,
    NewcaseComponent,
    SearchdossierComponent,
    ViewdossierComponent,
    ViewdefendantComponent,
    EditcasierComponent,
    AudienceComponent,
    JugementComponent,
    AssignationComponent,
    AudiencelistComponent,
    ProcessingcaselistComponent,
    WaitingcaselistComponent,
    ViewaudienceComponent,
    UsermanagementComponent
  ],
  imports: [
    MatSlideToggleModule,
    MatListModule,
    CommonModule,
    PagesRoutingModule,
    CardModule,
    DataTablesModule,
    ButtonModule,
    FontAwesomeModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule, 
    MatProgressBarModule,
    MatIconModule,
    RouterModule
  ],

  providers:[
  {
    provide : HTTP_INTERCEPTORS,
    useClass : Logininterceptor,
    multi : true
  }],
})
export class PagesModule {
}
