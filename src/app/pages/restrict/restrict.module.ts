import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictRoutingModule } from './restrict-routing.module';
import { RestrictPage } from './restrict.page';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfigurationModule } from './configuration/configuration.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PdiModule } from './pdi/pdi.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginService } from 'src/app/services/v1/login/login.service';

@NgModule({
  declarations: [RestrictPage],
  imports: [
    RestrictRoutingModule,
    IonicModule.forRoot(),
    CommonModule,
    FormsModule,
    SharedModule,
    ConfigurationModule,
    DashboardModule,
    PdiModule
  ],
  providers: [LoginService]
})
export class RestrictModule { }
