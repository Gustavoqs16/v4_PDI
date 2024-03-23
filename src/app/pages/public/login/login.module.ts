import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { LoginService } from 'src/app/services/v1/login/login.service';


@NgModule({
  declarations: [LoginPage],
  imports: [
    LoginRoutingModule,
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService]
})
export class LoginModule { }
