import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadPage } from './file-upload.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FileUploadPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FileUploadRoutingModule,
    SharedModule
  ]
})
export class FileUploadModule { }