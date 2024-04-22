import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  isMobile: boolean = false;

  constructor() {
    this.detectarTamanhoDaTela();
  }

  ngOnInit() {}

  detectarTamanhoDaTela() {
    this.isMobile = window.innerWidth <= 768; // Defina o limite que você considera como mobile
  }
}
