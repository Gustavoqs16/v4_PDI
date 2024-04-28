import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PdiRoutingModule } from './pdi-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PdiPage } from './pdi.page';
import { LoginService } from 'src/app/services/v1/login/login.service';
import { PdiService } from 'src/app/services/v1/pdi/pdi.service';
import { PdiTasksService } from 'src/app/services/v1/pdi-tasks/pdi-tasks.service';
import { UsersService } from 'src/app/services/v1/users/users.service';
import { PermissionsService } from 'src/app/services/v1/permissions/permissions.service';
import { RolePermissionsService } from 'src/app/services/v1/role-permissions/role-permissions.service';

@NgModule({
  declarations: [PdiPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PdiRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoginService,
    PdiService,
    PdiTasksService,
    UsersService,
    PermissionsService,
    RolePermissionsService
  ]
})
export class PdiModule { }
