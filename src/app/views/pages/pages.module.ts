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


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    SearchdefendantComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    DataTablesModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
