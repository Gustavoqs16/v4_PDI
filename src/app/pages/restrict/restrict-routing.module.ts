import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictPage } from './restrict.page';
import { AuthGuard } from 'src/app/@core/domain/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RestrictPage,
    children: [
      {
        path: 'configuration',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./configuration/configuration.module').then(
            (m) => m.ConfigurationModule
          ),
      },
      {
        path: 'dashboard',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'pdi',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pdi/pdi.module').then((m) => m.PdiModule),
      },
      {
        path: 'pdc',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pdc/pdc.module').then((m) => m.PdcModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestrictRoutingModule {}
