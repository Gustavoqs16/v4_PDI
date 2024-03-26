import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PdiModel } from 'src/app/@core/domain/models/pdi/pdi.model';
import { CreatePdiDto } from 'src/app/@core/domain/models/pdi/dto/pdiCreateDto.model';
import { PdiService } from 'src/app/services/v1/pdi/pdi.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ItemReorderEventDetail } from '@ionic/angular';
import { CreatePdiTasksDto } from 'src/app/@core/domain/models/pdi-tasks/dto/pdiTasksCreateDto.model';
import { PdiTasksService } from 'src/app/services/v1/pdi-tasks/pdi-tasks.service';
import { PdiTasksModel } from 'src/app/@core/domain/models/pdi-tasks/pdi-tasks.model';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-configuration-pdi',
  templateUrl: './configuration-pdi.page.html',
  styleUrls: ['./configuration-pdi.page.scss'],
})
export class ConfigurationPdiPage implements OnInit {
  listPdi: Array<PdiModel> = [];
  newPdi: CreatePdiDto = { name: '' };
  newTaskPdi: CreatePdiTasksDto = { descricao: '', pdiId: 0 };
  newTaskPdiForm: FormGroup;
  newPdiForm: FormGroup;

  constructor(
    private pdiService: PdiService,
    private pdiTasksService: PdiTasksService,
    private readonly toast: ToastService,
    private loadingService: LoadingService
  ) {
    this.newPdiForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
    this.newTaskPdiForm = new FormGroup({
      descricao: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getAllPdi();
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
      let response = await this.pdiTasksService.getOne(id);
      return response;
    } catch (error) {
      await this.toast.show(
        'Erro ao  as tarefas, entre em contato com o suporte',
        'danger'
      );
      return [];
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
        await this.toast.show(
          `Tarefa ${response?.descricao} criado com sucesso`,
          'success'
        );
        this.getAllPdi();
      } else {
        await this.toast.show(
          `Necessário preencher a descrição da tarefa`,
          'danger'
        );
      }
    } catch (error) {}
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
}
