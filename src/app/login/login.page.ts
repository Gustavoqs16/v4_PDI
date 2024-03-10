import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isMobile: boolean = false;
  loginForm: FormGroup;

  constructor(private httpService: HttpService, private router: Router) {
    this.detectarTamanhoDaTela();

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  detectarTamanhoDaTela() {
    this.isMobile = window.innerWidth <= 768; // Defina o limite que você considera como mobile
  }

  async login() {
    try {
      await this.router.navigate(['app', 'dashboard']);
      if (this.loginForm.valid) {
        const objRequest = this.loginForm.value;
        this.httpService.post('v1/auth/login', objRequest).subscribe(data => {
          console.log(data);
        });
      } else {
        console.log("Formulário inválido. Por favor, preencha os campos corretamente.");
      }
    } catch (error) {
      console.error("Erro durante a tentativa de login:", error);
    }
  }
}
