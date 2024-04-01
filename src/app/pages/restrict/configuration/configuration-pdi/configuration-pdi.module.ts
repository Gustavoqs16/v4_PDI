import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ConfigurationPdiRoutingModule } from './configuration-pdi-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigurationPdiPage } from './configuration-pdi.page';
import { UsersService } from 'src/app/services/v1/users/users.service';


@NgModule({
  declarations: [ConfigurationPdiPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ConfigurationPdiRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService
  ]
})
export class ConfigurationPdiModule { }
