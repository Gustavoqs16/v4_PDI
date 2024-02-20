import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';


@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class LoginModule { }
