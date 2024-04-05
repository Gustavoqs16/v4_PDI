import { NgModule } from '@angular/core';
import { IconV4Component } from '../components/icon-v4/icon-v4.component';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from '../components/menu-list/menu-list.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';
import { ModalPdiTaskComponent } from '../components/modal-pdi-task/modal-pdi-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPdiComponent } from '../components/modal-pdi/modal-pdi.component';

@NgModule({
  declarations: [
    IconV4Component,
    MenuListComponent,
    ModalComponent,
    ModalPdiTaskComponent,
    ModalPdiComponent
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  exports: [
    IconV4Component,
    MenuListComponent,
    ModalComponent,
    ModalPdiTaskComponent,
    ModalPdiComponent
  ],
})
export class SharedModule {}
