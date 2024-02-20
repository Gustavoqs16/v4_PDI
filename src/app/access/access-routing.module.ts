import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessPage } from './access.page';

const routes: Routes = [
  {
    path: '',
    component: AccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
