import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { ConfigurationPdcRoutingModule } from './configuration-pdc-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationPdcPage } from './configuration-pdc.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [ConfigurationPdcPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ConfigurationPdcRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class ConfigurationPdcModule { }
