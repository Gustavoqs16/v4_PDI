import { Component, OnInit } from '@angular/core';
import { IMenuList } from 'src/app/@core/domain/interfaces/IMenulist.interface';
import { SectorModel } from 'src/app/@core/domain/models/sector/sector.model';
import { MenuListComponent } from 'src/app/components/menu-list/menu-list.component';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { PopoverController } from '@ionic/angular';
import { SectorService } from 'src/app/services/v1/sector/sector.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.page.html',
  styleUrls: ['./sectors.page.scss'],
})
export class SectorsPage implements OnInit {
  sectors: SectorModel[] = [];
  displayedColumns: string[] = ['name', 'actions'];

  constructor(
    private sectorsService: SectorService,
    private loadingService: LoadingService,
    private readonly toast: ToastService,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    this.getAllSectors();
  }

  async getAllSectors() {
    try {
      await this.loadingService.showLoading();
      this.sectors = await this.sectorsService.getAll();
      await this.loadingService.hideLoading();
    } catch (error) {
      this.loadingService.hideLoading();

      await this.toast.show(
        "Erro ao listar os PDI's, entre em contato com o suporte",
        'danger'
      );
    }
  }

  async presentPopover(ev: any, item: SectorModel) {
    const headerMenu = {
      label: item.name,
    };

    const menuItems: IMenuList[] = [
      {
        label: 'Editar',
        onClick: () => {},
        icon: 'pencil',
      },
      {
        label: 'Excluir',
        onClick: async () => {
        },
        icon: 'trash',
      },
    ];

    const popover = await this.popoverCtrl.create({
      component: MenuListComponent,
      event: ev,
      translucent: true,
      componentProps: {
        items: menuItems,
        headerMenu: headerMenu,

      },
      cssClass: 'menu-list-default',
    });

    await popover.present();
  }
}
