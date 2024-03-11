import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictRoutingModule } from './restrict-routing.module';
import { RestrictPage } from './restrict.page';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BellComponent } from '../icons/bell/bell.component';
import { MessagesComponent } from '../icons/messages/messages.component';
import { ConfigurationModule } from './configuration/configuration.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PdiModule } from './pdi/pdi.module';

@NgModule({
  declarations: [RestrictPage, BellComponent, MessagesComponent],
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
})
export class RestrictModule {}
