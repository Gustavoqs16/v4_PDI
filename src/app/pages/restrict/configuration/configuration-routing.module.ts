import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationPage } from './configuration.page';
import { AuthGuard } from 'src/app/@core/domain/auth/auth.guard';
import { ConfigurationPdiPage } from './configuration-pdi/configuration-pdi.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationPage,
    children: [
      {
        path: 'system-preferences',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./system-preferences/system-preferences.module').then(
            (m) => m.SystemPreferencesModule
          ),
      },
      {
        path: 'file-upload',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./file-upload/file-upload.module').then(
            (m) => m.FileUploadModule
          ),
      },
      {
        path: 'configuration-pdi',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./configuration-pdi/configuration-pdi.module').then(
            (m) => m.ConfigurationPdiModule
          ),
      },
      {
        path: 'configuration-pdc',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./configuration-pdc/configuration-pdc.module').then(
            (m) => m.ConfigurationPdcModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
