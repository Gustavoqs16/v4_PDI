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

  links: any = [
    {
      title: 'Preferências de sistema',
      url: 'system-preferences',
    },
    {
      title: 'Upload de arquivos',
      url: 'file-upload',
    },
  ];

  routes: any = {
    'dashboard': 'Dashboard',
    'configuration': 'Configurações',
    'system-preferences': 'Configurações',
    'file-upload': 'Configurações',
  };

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
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
    console.log(title.split('/'))
    let splitTitle: string = title.split('/')[2];
    return this.routes[splitTitle];
  }
}
