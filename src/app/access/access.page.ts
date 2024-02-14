import { Component, HostListener, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonImg, IonIcon, IonButton } from '@ionic/angular/standalone';
import { AboutPage } from '../about/about.page';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule]
})
export class AccessPage implements OnInit {
  isMobile: boolean = false;
  component = AboutPage;

  constructor() {
    this.detectarTamanhoDaTela();
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.preloadImages([
      '../../assets/images/access/image_compress.jpg',
    ]);
  }

  preloadImages(urls: string[]) {
    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectarTamanhoDaTela();
  }

  detectarTamanhoDaTela() {
    this.isMobile = window.innerWidth <= 768; // Defina o limite que você considera como mobile
  }
}
