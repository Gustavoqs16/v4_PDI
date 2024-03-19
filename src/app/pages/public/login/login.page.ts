import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isMobile: boolean = false;
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private toast: ToastService,
    private router: Router
  ) {
    this.detectarTamanhoDaTela();

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void { }

  detectarTamanhoDaTela() {
    this.isMobile = window.innerWidth <= 768; // Defina o limite que você considera como mobile
  }

  async login() {
    this.router.navigate(['app', 'dashboard', 'pdi']);
    // try {
    //   if (this.loginForm.valid) {
    //     const { email, password } = this.loginForm.value;
    //     this.loginService.login(email, password);
    //   } else {
    //     this.toast.show('Necessário informar login e senha');
    //   }
    // } catch (error) {
    //   this.toast.show('Não foi possível realizar o login');
    //   console.error("Erro durante a tentativa de login:", error);
    // }
  }
}
