import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdcRoutingModule } from './pdc-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PdcPage } from './pdc.page';


@NgModule({
  declarations: [PdcPage],
  imports: [IonicModule, CommonModule, FormsModule, PdcRoutingModule, SharedModule],
})
export class PdcModule { }
