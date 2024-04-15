// theme.service.ts

import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkMode: boolean = false;

  constructor(
    private rendererFactory: RendererFactory2,
    private router: Router
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let route = event.url;
        let activeRoute = route.split('/')[2];
        let theme = window.localStorage.getItem('theme');

        this.renderer.removeClass(
          document.body,
          'dark-theme-pdc'
        );
        this.renderer.removeClass(
          document.body,
          'dark-theme'
        );

        if (theme == 'dark') {
          this.renderer.addClass(
            document.body,
            `${activeRoute == 'pdc' ? 'dark-theme-pdc' : 'dark-theme'}`
          );
        }
      }
    });
  }

  toggleDarkMode(isPdc = false) {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(
        document.body,
        `${isPdc ? 'dark-theme-pdc' : 'dark-theme'}`
      );
    } else {
      this.renderer.removeClass(
        document.body,
        `${isPdc ? 'dark-theme-pdc' : 'dark-theme'}`
      );
    }
    window.localStorage.setItem(
      'theme',
      `${this.isDarkMode ? 'dark' : 'light'}`
    );
  }

  isDarkTheme() {
    return this.isDarkMode;
  }
}
