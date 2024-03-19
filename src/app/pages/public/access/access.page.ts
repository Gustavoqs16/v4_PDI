import { Component, HostListener, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonImg, IonIcon, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AboutPage } from 'src/app/about/about.page';


@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {
  isMobile: boolean = false;
  component = AboutPage;

  constructor(private router: Router) {
    this.detectarTamanhoDaTela();
  }

  navigate(){
    this.router.navigate(['/about'])
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
