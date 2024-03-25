import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemPreferencesRoutingModule } from './system-preferences-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SystemPreferencesPage } from './system-preferences.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SystemPreferencesPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SystemPreferencesRoutingModule,
    SharedModule
  ],
})
export class SystemPreferencesModule {}
