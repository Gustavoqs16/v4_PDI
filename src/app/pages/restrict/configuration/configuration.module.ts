import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationPage } from './configuration.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { SystemPreferencesModule } from './system-preferences/system-preferences.module';
import { ConfigurationPdiPage } from './configuration-pdi/configuration-pdi.page';


@NgModule({
  declarations: [ConfigurationPage],
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ConfigurationRoutingModule,
    SharedModule,
    FileUploadModule,
    SystemPreferencesModule
  ]
})
export class ConfigurationModule { }
