import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RecoveryPasswordRoutingModule } from './recovery-password-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecoveryPasswordPage } from './recovery-password.page';


@NgModule({
  declarations: [RecoveryPasswordPage],
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RecoveryPasswordRoutingModule,
  ]
})
export class RecoveryPasswordModule { }
