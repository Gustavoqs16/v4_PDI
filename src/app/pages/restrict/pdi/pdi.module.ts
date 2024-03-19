import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PdiRoutingModule } from './pdi-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PdiPage } from './pdi.page';

@NgModule({
  declarations: [PdiPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PdiRoutingModule,
    SharedModule
  ]
})
export class PdiModule { }
