import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { ConfigurationPdcRoutingModule } from './configuration-pdc-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationPdcPage } from './configuration-pdc.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ConfigurationPdcPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ConfigurationPdcRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ConfigurationPdcModule { }
