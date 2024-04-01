import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { PdiTasksService } from 'src/app/services/v1/pdi-tasks/pdi-tasks.service';

@Component({
  selector: 'app-modal-pdi-task',
  templateUrl: './modal-pdi-task.component.html',
  styleUrls: ['./modal-pdi-task.component.scss'],
})
export class ModalPdiTaskComponent  implements OnInit {

  @Input() pdi: any; // Substitua por um tipo mais específico se possível
  newTaskPdiForm: FormGroup;


    constructor(private modalController: ModalController, private pdiTasksService: PdiTasksService, private readonly toast: ToastService,) {
    this.newTaskPdiForm = new FormGroup({
      descricao: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

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
        // this.getAllPdi();
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
        await this.toast.show(`Tarefa deletada com sucesso`, 'success');
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
