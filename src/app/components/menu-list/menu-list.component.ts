import { Component, Input, OnInit } from '@angular/core';
import { IMenuList } from 'src/app/@core/domain/interfaces/IMenulist.interface';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  menuItems: IMenuList[] = [];
  headerMenu: any = {};
  footerMenu: any = {};

  constructor(private popoverCtrl: PopoverController, private navParams: NavParams) {
    this.menuItems = this.navParams.get('items') || [];
    this.headerMenu = this.navParams.get('headerMenu') || [];
    this.footerMenu = this.navParams.get('footerMenu') || [];
  }

  ngOnInit(): void {

  }

  onItemClick(item: IMenuList) {
    item.onClick();
    this.popoverCtrl.dismiss();
  }
}
