import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestrictRoutingModule } from './restrict-routing.module';
import { RestrictPage } from './restrict.page';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfigurationPage } from './configuration/configuration.page';
import { BellComponent } from '../icons/bell/bell.component';
import { MessagesComponent } from '../icons/messages/messages.component';

@NgModule({
  declarations: [RestrictPage, BellComponent, MessagesComponent, ConfigurationPage],
  imports: [RestrictRoutingModule, IonicModule.forRoot(), CommonModule, FormsModule],
})
export class RestrictModule {}
