import { NgModule } from '@angular/core';
import { IconV4Component } from '../icons/icon-v4/icon-v4.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    IconV4Component,
  ],
  imports: [
      CommonModule
  ],
  exports: [
    IconV4Component
  ]
})
export class SharedModule { }
