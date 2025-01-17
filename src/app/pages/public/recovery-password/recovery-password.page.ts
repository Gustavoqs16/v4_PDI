import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.page.html',
  styleUrls: ['./recovery-password.page.scss'],
})
export class RecoveryPasswordPage implements OnInit {
  isMobile: boolean = false;
  loginForm: FormGroup;

  constructor() {
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

  login(){
    try {
      if (this.loginForm.valid) {
        const objRequest = this.loginForm.value;
        // this.httpService.post('v1/auth/login', objRequest).subscribe(data => {
        //   console.log(data);
        // });
      } else {
        console.log("Formulário inválido. Por favor, preencha os campos corretamente.");
      }
    } catch (error) {
      console.error("Erro durante a tentativa de login:", error);
    }
  }
}
