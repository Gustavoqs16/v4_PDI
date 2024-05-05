import { Component, OnInit } from '@angular/core';
import { IMenuList } from 'src/app/@core/domain/interfaces/IMenulist.interface';
import { SectorModel } from 'src/app/@core/domain/models/sector/sector.model';
import { MenuListComponent } from 'src/app/components/menu-list/menu-list.component';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { PopoverController } from '@ionic/angular';
import { SectorService } from 'src/app/services/v1/sector/sector.service';
import { ModalController } from '@ionic/angular';
import { ModalRegistrationComponent } from 'src/app/components/modal-registration/modal-registration.component';
import { ModalConfirmComponent } from 'src/app/components/modal-confirm/modal-confirm.component';

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
    private popoverCtrl: PopoverController,
    private modalController: ModalController
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
        onClick: () => {
          this.newSector(true, item.id, item.name);
        },
        icon: 'pencil',
      },
      {
        label: 'Excluir',
        onClick: async () => {
          this.confirmDeleteSector('Confirmar ?', 'Deseja mesmo deletar o setor ' + item.name + ' ?', item.id);
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

  async newSector(isEdit: boolean = false, id?: number, value: string = '') {
    const modal = await this.modalController.create({
      component: ModalRegistrationComponent,
      cssClass: 'max-h-300',
      componentProps: {
        title: 'Novo setor',
        inputs: [{ name: 'Setor', id: 'name', type: 'text', value: value,required: true }],
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned.data);
      if (dataReturned !== null) {
        isEdit && id
          ? this.handleSave(dataReturned.data, isEdit, id)
          : this.handleSave(dataReturned.data);
      }
    });

    return await modal.present();
  }

  async handleSave(data: any, isEdit: boolean = false, id?: number) {
    try {
      if (!data?.name)
        return await this.toast.show('Necessário preencher o nome do setor.');

      let response: any =
        isEdit && id
          ? await this.sectorsService.update(id, data)
          : await this.sectorsService.create(data);
      if (response) {
        await this.toast.show(
          `Setor ${response?.name} ${
            isEdit ? 'criado' : 'atualizado'
          } com sucesso`,
          'success'
        );

        this.getAllSectors();
      }
    } catch (error) {}
  }

  async confirmDeleteSector(title: string = 'Confirmar Ação', message: string = 'Você realmente deseja fazer isso?', id: number) {
    const modal = await this.modalController.create({
      component: ModalConfirmComponent,
      cssClass: 'modal-confirm-w-h',
      componentProps: {
        'title': title,
        'message': message
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data.confirmed) {
      await this.deleteSector(id);
    } else {
      console.log('Cancelado');
    }
  }

  async deleteSector(id: number) {
    try {
      if (id) {
        let response = await this.sectorsService.delete(id);
        await this.toast.show(`PDI deletado com sucesso`, 'success');
        this.getAllSectors();
      } else {
        await this.toast.show('PDI não encontrado', 'danger');
      }
    } catch (error) {
      await this.toast.show(
        'Formulário inválido. Por favor, preencha os campos corretamente.',
        'danger'
      );
    }
  }
}
