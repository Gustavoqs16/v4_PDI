import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { SectorsRoutingModule } from './sectors-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SectorService } from 'src/app/services/v1/sector/sector.service';
import { SectorsPage } from './sectors.page';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [SectorsPage],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    SectorsRoutingModule,
    SharedModule,
    MatTableModule
  ],
  providers: [
    SectorService,
  ]
})
export class SectorsModule { }
