import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
} from 'ionicons/icons';
import { filter } from 'rxjs';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  // standalone: true,
  // imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  isAccess = false;
  routeActive: string = '';

  routes: any = {
    dashboard: 'Dashboard',
    configuration: 'Configurações',
    'system-preferences': 'Configurações',
    'file-upload': 'Configurações',
    pdi: 'PDI',
    pdc: 'PDC',
  };

  links: any = {
    configuration: [
      {
        title: 'Preferências de sistema',
        url: 'app/configuration/system-preferences',
        active: false,
      },
      {
        title: 'Upload de arquivos',
        url: 'app/configuration/file-upload',
        active: false,
      },
      {
        title: 'Configuração do PDI',
        url: 'app/configuration/configuration-pdi',
        active: false,
      },
      {
        title: 'Configuração do PDC',
        url: 'app/configuration/configuration-pdc',
        active: false,
      },
      {
        title: 'Setores',
        url: 'app/configuration/sectors',
        active: false,
      },
    ],
    menu: [
      {
        title: 'Dashboard',
        url: 'app/dashboard',
        active: false,
      },
      {
        title: 'PDI',
        url: 'app/pdi',
        active: false,
      },
      {
        title: 'PDC',
        url: 'app/pdc',
        active: false,
      },
      {
        title: 'V4 Network',
        url: 'app/dashboard',
        active: false,
      },
      {
        title: 'Configurações',
        url: 'app/configuration/system-preferences',
        active: false,
      },
    ],
  };

  public appPages = [
    { title: 'Dashboard', url: '/access' },
    { title: 'Planos', url: '/access' },
    { title: 'Sobre', url: '/login' },
  ];
  isMobile: boolean = false;
  classMenu: string = '';
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  currentRoute: string;
  title: string = '';

  constructor(private router: Router, private themeService: ThemeService) {
    addIcons({
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp,
    });
    this.detectarTamanhoDaTela();
    this.classMenu =
      this.router.url === '/' ? 'menu-header-access' : 'menu-header';

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let route = event.url;
        this.currentRoute = route;
        this.title = this.translationTitle(route);
      }
    });

    window.addEventListener('resize', this.detectarTamanhoDaTela.bind(this));
    this.detectarTamanhoDaTela();
  }

  isRestrictedPage(): boolean {
    return this.router.url != '/';
  }

  translationTitle(title: string) {
    let splitTitle: string = title.split('/')[2];
    let splitSubTitle: string = title.split('/')[3];
    this.routeActive = splitTitle;

    let finded = this.links[
      this.routeActive !== 'configuration' ? 'menu' : 'configuration'
    ].findIndex((elem: any) =>
      elem?.url.includes(
        this.routeActive !== 'configuration' ? splitTitle : splitSubTitle
      )
    );
    if (finded != -1)
      this.setActiveLink(
        this.links[
          this.routeActive !== 'configuration' ? 'menu' : 'configuration'
        ][finded]
      );

    return this.routes[splitTitle];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectarTamanhoDaTela();
  }

  setActiveLink(selectedLink: any) {
    this.links.menu.forEach((link: any) => (link.active = false));
    this.links.configuration.forEach((link: any) => (link.active = false));

    selectedLink.active = true;
  }

  detectarTamanhoDaTela() {
    this.isMobile = window.innerWidth <= 768; // Defina o limite que você considera como mobile
  }

  isDarkTheme() {
    return this.themeService.isDarkTheme();
  }
}
