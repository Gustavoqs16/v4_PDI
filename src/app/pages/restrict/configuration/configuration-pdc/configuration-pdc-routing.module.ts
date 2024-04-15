import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationPdcPage } from './configuration-pdc.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationPdcPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationPdcRoutingModule { }
