import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'access',
    pathMatch: 'full',
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then( m => m.AccessModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutModule)
  },

];
