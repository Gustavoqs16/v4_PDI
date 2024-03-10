import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemPreferencesPage } from './system-preferences.page';

const routes: Routes = [
  {
    path: '',
    component: SystemPreferencesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemPreferencesRoutingModule { }
