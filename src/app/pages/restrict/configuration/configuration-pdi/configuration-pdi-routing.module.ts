import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationPdiPage } from './configuration-pdi.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationPdiPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationPdiRoutingModule { }
