import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-restrict',
  templateUrl: './restrict.page.html',
  styleUrls: ['./restrict.page.scss'],
})
export class RestrictPage implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {

  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  isDarkTheme() {
    return this.themeService.isDarkTheme();
  }
}
