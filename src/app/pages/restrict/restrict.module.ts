import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictRoutingModule } from './restrict-routing.module';
import { RestrictPage } from './restrict.page';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfigurationModule } from './configuration/configuration.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PdiModule } from './pdi/pdi.module';
import { BellComponent } from 'src/app/icons/bell/bell.component';
import { MessagesComponent } from 'src/app/icons/messages/messages.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
