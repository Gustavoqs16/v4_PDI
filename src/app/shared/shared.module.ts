import { NgModule } from '@angular/core';
import { IconV4Component } from '../components/icon-v4/icon-v4.component';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from '../components/menu-list/menu-list.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    IconV4Component,
    MenuListComponent
  ],
  imports: [
      CommonModule,
      IonicModule
  ],
  exports: [
    IconV4Component,
    MenuListComponent
  ]
})
export class SharedModule { }
