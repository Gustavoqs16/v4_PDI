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
      {
        path: 'configuration',
        component: ConfigurationPage,
        data: { title: 'Configuração' }
      },
      {
        path: 'dashboard',
        component: DashboardPage,
        data: { title: 'Dashboard' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrictRoutingModule { }
