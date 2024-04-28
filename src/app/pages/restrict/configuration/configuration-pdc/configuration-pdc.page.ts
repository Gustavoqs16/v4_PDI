import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatePdiTasksDto } from 'src/app/@core/domain/models/pdi-tasks/dto/pdiTasksCreateDto.model';
import { CreatePdiDto } from 'src/app/@core/domain/models/pdi/dto/pdiCreateDto.model';
import { UsersModel } from 'src/app/@core/domain/models/users/users.model';
import { ModalConfirmComponent } from 'src/app/components/modal-confirm/modal-confirm.component';
import { ModalPdiTaskComponent } from 'src/app/components/modal-pdi-task/modal-pdi-task.component';
import { ModalPdiComponent } from 'src/app/components/modal-pdi/modal-pdi.component';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { PdiTasksService } from 'src/app/services/v1/pdi-tasks/pdi-tasks.service';
import { PdiService } from 'src/app/services/v1/pdi/pdi.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/angular';
import { UsersService } from 'src/app/services/v1/users/users.service';
import { ModalPdcComponent } from 'src/app/components/modal-pdc/modal-pdc.component';
import { MenuListComponent } from 'src/app/components/menu-list/menu-list.component';
import { IMenuList } from 'src/app/@core/domain/interfaces/IMenulist.interface';
import { PdcModel } from 'src/app/@core/domain/models/pdc/pdc.model';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-configuration-pdc',
  templateUrl: './configuration-pdc.page.html',
  styleUrls: ['./configuration-pdc.page.scss'],
})
export class ConfigurationPdcPage implements OnInit {
  listPdi: Array<any> = [];
  listUsers: Array<any> = [];
  newPdi: CreatePdiDto = { name: '' };
  newTaskPdi: CreatePdiTasksDto = { descricao: '', pdiId: 0 };
  newTaskPdiForm: FormGroup;
  newPdiForm: FormGroup;

  displayedColumns: string[] = ['userImg', 'name', 'userName', 'concluido', 'actions'];

  constructor(
    private pdiService: PdiService,
    private userService: UsersService,
    private pdiTasksService: PdiTasksService,
    private readonly toast: ToastService,
    private loadingService: LoadingService,
    private modalController: ModalController,
    private alertController: AlertController,
    private popoverCtrl: PopoverController
  ) {
    this.newPdiForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      userId: new FormControl(0)
    });

  }

  ngOnInit() {
    this.getAllPdi();
    this.getAllUsers();
  }

  async createdPdi() {
    try {
      if (this.newPdiForm.valid) {
        const objRequest = this.newPdiForm.value;
        let response = await this.pdiService.create(objRequest);
        await this.toast.show(
          `PDI ${response?.name} criado com sucesso`,
          'success'
        );

        this.getAllPdi();
        this.newPdiForm.reset();
      } else {
        await this.toast.show(
          'Por favor, preencha os campos corretamente.',
          'danger'
        );
      }
    } catch (error) {
      await this.toast.show(
        'Formulário inválido. Por favor, preencha os campos corretamente.',
        'danger'
      );
    }
  }

  async deletePdi(id: number) {
    try {
      if (id) {
        let response = await this.pdiService.delete(id);
        await this.toast.show(`PDI deletado com sucesso`, 'success');
        this.getAllPdi();
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

  async getAllPdi() {
    try {
      this.loadingService.showLoading();
      let response = await this.pdiService.getAll();

      const tasksPromises = response.map(async (item: any) => {
        const tasks = await this.getListTasks(item.id) || [];
        return {
          ...item,
          tasks,
        };
      });

      this.listPdi = await Promise.all(tasksPromises);
      this.loadingService.hideLoading();

    } catch (error) {
      this.loadingService.hideLoading();

      await this.toast.show(
        "Erro ao listar os PDI's, entre em contato com o suporte",
        'danger'
      );
    }
  }

  async getListTasks(id: number) {
    try {
      let response: any = await this.pdiTasksService.getOne(id);
      return response.map((item: any) => {
        return {
          ...item,
          isEdit: false
        }
      });
    } catch (error) {
      await this.toast.show(
        'Erro ao  as tarefas, entre em contato com o suporte',
        'danger'
      );
      return [];
    }
  }

  async confirmDeletePdi(title: string = 'Confirmar Ação', message: string = 'Você realmente deseja fazer isso?', id: number) {
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
      await this.deletePdi(id);
    } else {
      console.log('Cancelado');
    }
  }


  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  async openPdiTasks(pdi: any) {
    let modal = await this.modalController.create({
      component: ModalPdiTaskComponent,
      cssClass: 'min-w-75vw',
      componentProps: { pdi: pdi, title: `PDI - ${pdi.name}` },
    });
    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if(role == 'pdi-task') await this.getAllPdi();
  }

  async openPdi() {
    let modal = await this.modalController.create({
      component: ModalPdcComponent,
      cssClass: "max-h-300"
    });
    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if(role == 'pdi') await this.getAllPdi();
  }

  async openUserSelect(pdi: any) {
    const alert = await this.alertController.create({
      header: 'Selecione os usúario responsável',
      inputs: [
        ...this.listUsers
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmação Cancelada');
          }
        }, {
          text: 'Ok',
          handler: (selected: any) => {
            let findedUser = this.listUsers.find(user => user.value === selected);
            console.log('Selecionados:', findedUser, this.listUsers, selected);
            pdi.selectedUser = findedUser; // Atualiza a lista de usuários selecionados para o PDI
          }
        }
      ]
    });

    await alert.present();
  }

  async getAllUsers() {
    try {
      let response = await this.userService.getAll();

      this.listUsers = response.map((item: UsersModel) => {
        return { name: item.name, type: 'radio', label: item.name, value: item.id }
      });

    } catch (error) {

      await this.toast.show(
        "Erro ao listar os usúarios, entre em contato com o suporte",
        'danger'
      );
    }
  }

  async presentPopover(ev: any, item: PdcModel) {
    const headerMenu = {
      label: item.name,
    };

    const menuItems: IMenuList[] = [
      {
        label: 'Editar',
        onClick: () => {
          this.openPdiTasks(item);
        },
        icon: 'pencil',
      },
      {
        label: 'Excluir',
        onClick: async () => {
          this.confirmDeletePdi('Confirmar ?', 'Deseja mesmo deletar o PDI ' + item.name + ' ?', item.id);
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
