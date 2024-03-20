import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http/http.service';
import { RestrictModule } from './pages/restrict/restrict.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RestrictModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    HttpService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
