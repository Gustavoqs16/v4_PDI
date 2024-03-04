import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationPage } from './configuration.page';
import { BellComponent } from '../icons/bell/bell.component';
import { MessagesComponent } from '../icons/messages/messages.component';


@NgModule({
  declarations: [ConfigurationPage, BellComponent, MessagesComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
