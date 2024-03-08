import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationPage } from './configuration.page';
import { SystemPreferencesPage } from '../system-preferences/system-preferences.page';
import { FileUploadPage } from '../file-upload/file-upload.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationPage,
    children: [
      {
        path: 'system-preferences',
        component: SystemPreferencesPage
      },
      {
        path: 'file-upload',
        component: FileUploadPage
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
