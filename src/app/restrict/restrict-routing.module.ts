import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictPage } from './restrict.page';
import { ConfigurationPage } from './configuration/configuration.page';
import { DashboardPage } from './dashboard/dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: RestrictPage,
    children: [
      { path: 'configuration', loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule),},
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrictRoutingModule { }
