import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectorsPage } from './sectors.page';

const routes: Routes = [
  {
    path: '',
    component: SectorsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectorsRoutingModule { }
