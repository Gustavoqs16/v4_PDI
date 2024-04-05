import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersModel } from 'src/app/@core/domain/models/users/users.model';
import { ToastService } from 'src/app/services/toast/toast.service';
import { PdiService } from 'src/app/services/v1/pdi/pdi.service';
import { UsersService } from 'src/app/services/v1/users/users.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-pdi',
  templateUrl: './modal-pdi.component.html',
  styleUrls: ['./modal-pdi.component.scss'],
})
export class ModalPdiComponent  implements OnInit {
  newPdiForm: FormGroup;
  listUsers: Array<any> = [];

  constructor(
    private pdiService: PdiService,
    private userService: UsersService,
    private readonly toast: ToastService,
    public modalController: ModalController
  ) {
    this.newPdiForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      userId: new FormControl(0)
    });
  }

  ngOnInit() {
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

        this.closeModal(true);
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

  async closeModal(isCallback: boolean = false) {
    await this.modalController.dismiss(isCallback, 'pdi');
  }
}
