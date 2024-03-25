import { Routes } from '@angular/router';
import { AuthGuard } from '../@core/domain/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('../pages/public/access/access.module').then( m => m.AccessModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/public/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'about',
    canLoad: [AuthGuard],
    loadChildren: () => import('../about/about.module').then( m => m.AboutModule)
  },
  {
    path: 'register',
    canLoad: [AuthGuard],
    loadChildren: () => import('../pages/public/register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'recovery-password',
    canLoad: [AuthGuard],
    loadChildren: () => import('../pages/public/recovery-password/recovery-password.module').then( m => m.RecoveryPasswordModule)
  },
  {
    path: 'app',
    canLoad: [AuthGuard],
    loadChildren: () => import('../pages/restrict/restrict.module').then( m => m.RestrictModule)
  },

];
