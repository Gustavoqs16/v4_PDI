import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictPage } from './restrict.page';

const routes: Routes = [
  {
    path: '',
    component: RestrictPage,
    children: [
      { path: 'configuration', loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule),},
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'pdi', loadChildren: () => import('./pdi/pdi.module').then(m => m.PdiModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrictRoutingModule { }
