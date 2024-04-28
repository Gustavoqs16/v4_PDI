import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UsersModel } from 'src/app/@core/domain/models/users/users.model';
import { ToastService } from 'src/app/services/toast/toast.service';
import { PdiTasksService } from 'src/app/services/v1/pdi-tasks/pdi-tasks.service';
import { PdiService } from 'src/app/services/v1/pdi/pdi.service';
import { UsersService } from 'src/app/services/v1/users/users.service';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-modal-pdi-task',
  templateUrl: './modal-pdi-task.component.html',
  styleUrls: ['./modal-pdi-task.component.scss'],
})
export class ModalPdiTaskComponent  implements OnInit {

  @Input() pdi: any;
  @Input() isPdi: boolean = false;
  @Input() title: string = 'Adicionar tarefa';
  newTaskPdiForm: FormGroup;
  newPdiForm: FormGroup;
  listUsers: Array<any> = [];
  editDescription: string = '';

    constructor(
      public modalController: ModalController,
      private pdiTasksService: PdiTasksService,
      private readonly toast: ToastService,
      private pdiService: PdiService,
      private userService: UsersService,
    ) {
    this.newTaskPdiForm = new FormGroup({
      descricao: new FormControl('', [Validators.required]),
    });
    this.newPdiForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      userId: new FormControl(0)
    });
  }

  ngOnInit() {
    this.getAllUsers();
    this.newPdiForm.controls['name'].setValue(this.pdi.name);
    this.newPdiForm.controls['userId'].setValue(this.pdi.userId);
  }

  async confirmModalTask(title: string = 'Confirmar Ação', message: string = 'Você realmente deseja fazer isso?', id: number) {
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
      this.deleteTaskPdi(id);
    } else {
      console.log('Cancelado');
    }
  }

  async createNewTask(id: number) {
    try {
      if (this.newTaskPdiForm.valid) {
        const objRequest = this.newTaskPdiForm.value;
        let payload = {
          ...objRequest,
          pdiId: id
        }
        let response = await this.pdiTasksService.create(payload);

        if(response) {
          await this.toast.show(
            `Tarefa ${response?.descricao} criado com sucesso`,
            'success'
          );

          this.getListTasks(this.pdi?.id);
        }
      } else {
        await this.toast.show(
          `Necessário preencher a descrição da tarefa`,
          'danger'
        );
      }
    } catch (error) {}
  }

  async deleteTaskPdi(id: number) {
    try {
      if (id) {
        let response = await this.pdiTasksService.delete(id);
        if(response) {
          await this.toast.show(`Tarefa deletada com sucesso`, 'success');

          this.getListTasks(this.pdi?.id);
        }
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

  async closeModal(isCallback: boolean = false) {
    await this.modalController.dismiss(isCallback, 'pdi-task');
  }

  async getListTasks(id: number) {
    try {
      let response: any = await this.pdiTasksService.getOne(id);
      if(response) {
        this.pdi.tasks = response.map((item: any) => {
          return {
            ...item,
            isEdit: false
          }
        });
      }
    } catch (error) {
      await this.toast.show(
        'Erro ao  as tarefas, entre em contato com o suporte',
        'danger'
      );
    }
  }

  async putPdi() {
    try {
      if (this.newPdiForm.valid) {
        const objRequest = this.newPdiForm.value;
        let response = await this.pdiService.update(this.pdi.id, objRequest);

        if(response) {
          await this.toast.show(
            `PDI ${response?.name} atualizado com sucesso`,
            'success'
          );
        }

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

  async putTaskPdi(task: any) {
    try {
      if (task.descricao) {
        const objRequest = {
          descricao: task.descricao
        };
        let response = await this.pdiTasksService.update(task.id, objRequest);

        if(response) {
          await this.toast.show(
            `Tarefa ${response?.descricao} atualizado com sucesso`,
            'success'
          );

        }
        task.isEdit = false;
;      } else {
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

  async getAllUsers() {
    try {
      let response = await this.userService.getAll();

      if(response) {
        this.listUsers = response.map((item: UsersModel) => {
          return { name: item.name, type: 'radio', label: item.name, value: item.id }
        });
      }

    } catch (error) {

      await this.toast.show(
        "Erro ao listar os usúarios, entre em contato com o suporte",
        'danger'
      );
    }
  }
}
