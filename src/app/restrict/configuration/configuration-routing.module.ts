import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationPage } from './configuration.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationPage,
    children: [
      {
        path: 'system-preferences',
        loadChildren: () =>
          import('../system-preferences/system-preferences.module').then(
            (m) => m.SystemPreferencesModule
          ),
      },
      {
        path: 'file-upload',
        loadChildren: () =>
          import('../file-upload/file-upload.module').then(
            (m) => m.FileUploadModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
