import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./pages/public/access/access.module').then( m => m.AccessModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/public/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/public/register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'recovery-password',
    loadChildren: () => import('./pages/public/recovery-password/recovery-password.module').then( m => m.RecoveryPasswordModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/restrict/restrict.module').then( m => m.RestrictModule)
  },

];
