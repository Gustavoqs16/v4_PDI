import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AboutPage } from './about.page';

@NgModule({
  declarations: [AboutPage],
  imports: [
    CommonModule,
    AboutRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class AboutModule { }
