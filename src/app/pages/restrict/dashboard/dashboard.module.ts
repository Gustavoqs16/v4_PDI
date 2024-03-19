import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardPage } from './dashboard.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardPage],
  imports: [IonicModule, CommonModule, FormsModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
