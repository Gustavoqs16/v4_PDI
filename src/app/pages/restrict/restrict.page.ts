import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { PopoverController } from '@ionic/angular';
import { MenuListComponent } from 'src/app/components/menu-list/menu-list.component';
import { IMenuList } from 'src/app/@core/domain/interfaces/IMenulist.interface';

@Component({
  selector: 'app-restrict',
  templateUrl: './restrict.page.html',
  styleUrls: ['./restrict.page.scss'],
})
export class RestrictPage implements OnInit {
  title: string = '';
  routeActive: string = '';

  links: any = {
    configuration: [
      {
        title: 'Preferências de sistema',
        url: 'configuration/system-preferences',
      },
      {
        title: 'Upload de arquivos',
        url: 'configuration/file-upload',
      },
    ],
    menu: [
      {
        title: 'Dashboard',
        url: 'dashboard',
      },
      {
        title: 'PDI',
        url: 'pdi',
      },
      {
        title: 'PDC',
        url: 'dashboard',
      },
      {
        title: 'V4 Network',
        url: 'dashboard',
      },
      {
        title: 'Configurações',
        url: 'configuration/system-preferences',
      },
    ],
  };

  routes: any = {
    dashboard: 'Dashboard',
    configuration: 'Configurações',
    'system-preferences': 'Configurações',
    'file-upload': 'Configurações',
    pdi: 'PDI',
    pdc: 'PDC',
  };

  isMobile: boolean = false;

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router,
    private popoverCtrl: PopoverController
  ) {
    this.detectarTamanhoDaTela();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let route = event.url;
        this.title = this.translationTitle(route);
      }
    });
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  isDarkTheme() {
    return this.themeService.isDarkTheme();
  }

  translationTitle(title: string) {
    let splitTitle: string = title.split('/')[2];
    this.routeActive = splitTitle;
    return this.routes[splitTitle];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectarTamanhoDaTela();
  }

  detectarTamanhoDaTela() {
    this.isMobile = window.innerWidth <= 768; // Defina o limite que você considera como mobile
  }

  async presentPopover(ev: any) {
    const headerMenu = {
      label: 'Nome',
      subLabel: 'Cargo',
    };

    const footerMenu = {
      label: 'Sair',
      icon: 'log-out-outline',
      onClick: () => {},
    };

    const menuItems: IMenuList[] = [
      {
        label: 'Perfil',
        onClick: () => {},
        icon: 'person-circle',
      },
      {
        label: 'Configurações',
        onClick: () => {},
        icon: 'settings-sharp',
      },
      {
        label: 'Tema',
        onClick: () => {
          this.toggleDarkMode();
        },
        icon: `${this.isDarkTheme() ? 'sunny' : 'moon'}`,
      },
      // Mais itens...
    ];

    const popover = await this.popoverCtrl.create({
      component: MenuListComponent,
      event: ev,
      translucent: true,
      componentProps: {
        items: menuItems,
        headerMenu: headerMenu,
        footerMenu: footerMenu,
      },
      cssClass: 'menu-list',
    });

    await popover.present();
  }
}
