import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
    pdc: 'PDC'
  };

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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
}
