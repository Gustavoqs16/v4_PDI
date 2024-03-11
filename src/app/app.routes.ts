import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
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
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'recovery-password',
    loadChildren: () => import('./recovery-password/recovery-password.module').then( m => m.RecoveryPasswordModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./restrict/restrict.module').then( m => m.RestrictModule)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./restrict/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'pdi',
    loadComponent: () => import('./restrict/pdi/pdi.page').then( m => m.PdiPage)
  },

];
