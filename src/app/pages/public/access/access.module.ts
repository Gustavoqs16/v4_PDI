import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccessPage } from './access.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AccessRoutingModule
  ],
  declarations: [AccessPage]
})
export class AccessModule { }
