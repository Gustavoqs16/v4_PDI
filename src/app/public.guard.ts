// public.guard.ts
import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard {
  constructor() {}
  //private authService: AuthService, private router: Router

  // canActivate(): boolean {
  //   if (!this.authService.isAuthenticated()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/home']); // Redireciona usuários autenticados para a página inicial
  //     return false;
  //   }
  // }
}
