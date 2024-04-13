import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdcPage } from './pdc.page';

const routes: Routes = [
  {
    path: '',
    component: PdcPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdcRoutingModule { }
