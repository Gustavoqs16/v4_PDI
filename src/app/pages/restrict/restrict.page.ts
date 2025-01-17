import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { PopoverController } from '@ionic/angular';
import { MenuListComponent } from 'src/app/components/menu-list/menu-list.component';
import { IMenuList } from 'src/app/@core/domain/interfaces/IMenulist.interface';
import { LoginService } from 'src/app/services/v1/login/login.service';

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
        active: false,
      },
      {
        title: 'Upload de arquivos',
        url: 'configuration/file-upload',
        active: false,
      },
      {
        title: 'Configuração do PDI',
        url: 'configuration/configuration-pdi',
        active: false,
      },
      {
        title: 'Configuração do PDC',
        url: 'configuration/configuration-pdc',
        active: false,
      },
      {
        title: 'Setores',
        url: 'configuration/sectors',
        active: false,
      },
    ],
    menu: [
      {
        title: 'Dashboard',
        url: 'dashboard',
        active: false,
        icon: 'chart'
      },
      {
        title: 'PDI',
        url: 'pdi',
        active: false,
        icon: 'circle-user'
      },
      {
        title: 'PDC',
        url: 'pdc',
        active: false,
        icon: 'chart-user'
      },
      {
        title: 'V4 Network',
        url: 'dashboard',
        active: false,
        icon: 'chart-user'
      },
      {
        title: 'Configurações',
        url: 'configuration/system-preferences',
        active: false,
        icon: 'engine'
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
  nomeUsuario: string;
  cargoUsuario: string;

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router,
    private popoverCtrl: PopoverController,
    private loginService: LoginService
  ) {
    this.detectarTamanhoDaTela();
    this.isDarkTheme();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let route = event.url;
        this.title = this.translationTitle(route);
        console.log(route, this.title);
      }
    });
  }


  ngOnInit(): void {
    if (this.loginService.$isLogged.getValue()) {
      const { name, roleUser } = this.loginService.$user.getValue();

      this.nomeUsuario = name;
      this.cargoUsuario = roleUser.name;
    }
  }

  toggleDarkMode() {
    if(this.routeActive == 'pdc') {
      this.themeService.toggleDarkMode(true);
    } else {
      this.themeService.toggleDarkMode();
    }
  }

  isDarkTheme() {
    return this.themeService.isDarkTheme();
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

  detectarTamanhoDaTela() {
    this.isMobile = window.innerWidth <= 768;
  }

  async presentPopover(ev: any) {
    const headerMenu = {
      label: this.nomeUsuario,
      subLabel: this.cargoUsuario,
    };

    const footerMenu = {
      label: 'Sair',
      icon: 'log-out-outline',
      onClick: async () => {
        await this.loginService.logout();
        window.localStorage.clear();
        this.router.navigate(['login']);
      },
    };

    const menuItems: IMenuList[] = [
      {
        label: 'Perfil',
        onClick: () => {},
        icon: 'person-circle',
      },
      {
        label: 'Configurações',
        onClick: async () => {
          await this.router.navigate([
            'app',
            'configuration',
            'system-preferences',
          ]);
        },
        icon: 'settings-sharp',
      },
      {
        label: 'Tema',
        onClick: () => {
          this.toggleDarkMode();
        },
        icon: `${this.isDarkTheme() ? 'sunny' : 'moon'}`,
      },
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

  setActiveLink(selectedLink: any) {
    this.links.menu.forEach((link: any) => (link.active = false));
    this.links.configuration.forEach((link: any) => (link.active = false));

    selectedLink.active = true;
  }
}
