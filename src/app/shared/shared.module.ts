import { NgModule } from '@angular/core';
import { IconV4Component } from '../components/icon-v4/icon-v4.component';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from '../components/menu-list/menu-list.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';
import { ModalPdiTaskComponent } from '../components/modal-pdi-task/modal-pdi-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPdiComponent } from '../components/modal-pdi/modal-pdi.component';
import { ModalConfirmComponent } from '../components/modal-confirm/modal-confirm.component';
import { CircleProgressComponent } from '../components/circle-progress/circle-progress.component';
import { ModalPdcComponent } from '../components/modal-pdc/modal-pdc.component';
import { ModalRegistrationComponent } from '../components/modal-registration/modal-registration.component';
import { ModalPdcOrderComponent } from '../components/modal-pdc-order/modal-pdc-order.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { DropzoneComponent } from '../components/dropzone/dropzone.component';
import { FileSizePipe } from '../@core/domain/pipe/file-size.pipe';
import { DateFormatPipe } from '../@core/domain/pipe/date-format.pipe';

@NgModule({
  declarations: [
    IconV4Component,
    MenuListComponent,
    ModalComponent,
    ModalPdiTaskComponent,
    ModalPdiComponent,
    ModalConfirmComponent,
    CircleProgressComponent,
    ModalPdcComponent,
    ModalRegistrationComponent,
    ModalPdcOrderComponent,
    DropzoneComponent,
    FileSizePipe,
    DateFormatPipe
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, NgxFileDropModule],
  exports: [
    IconV4Component,
    MenuListComponent,
    ModalComponent,
    ModalPdiTaskComponent,
    ModalPdiComponent,
    ModalConfirmComponent,
    CircleProgressComponent,
    ModalPdcComponent,
    ModalRegistrationComponent,
    ModalPdcOrderComponent,
    DropzoneComponent,
    FileSizePipe,
    DateFormatPipe
  ],
})
export class SharedModule {}
