import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersModel } from 'src/app/@core/domain/models/users/users.model';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ModalController } from '@ionic/angular';
import { UsersService } from 'src/app/services/v1/users/users.service';
import { PdcService } from 'src/app/services/v1/pdc/pdc.service';
import { SectorService } from 'src/app/services/v1/sector/sector.service';
import { SectorModel } from 'src/app/@core/domain/models/sector/sector.model';

@Component({
  selector: 'app-modal-pdc',
  templateUrl: './modal-pdc.component.html',
  styleUrls: ['./modal-pdc.component.scss'],
})
export class ModalPdcComponent implements OnInit {
  newPdcForm: FormGroup;
  listUsers: Array<any> = [];
  listSectors: Array<any> = [];
  image: File;

  constructor(
    private pdcService: PdcService,
    private userService: UsersService,
    private sectorService: SectorService,
    private readonly toast: ToastService,
    public modalController: ModalController
  ) {
    this.newPdcForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      sectorId: new FormControl(0),
    });
  }

  ngOnInit() {
    this.getAllSectors();
  }

  async createdPdc() {
    try {
      if (this.newPdcForm.valid) {
        const objRequest = this.newPdcForm.value;
        console.log(objRequest, this.image);
        let response = await this.pdcService.createPdc(objRequest, this.image);
        if(response) {
          await this.toast.show(
            `PDC ${response?.name} criado com sucesso`,
            'success'
          );

          this.closeModal(true);
          this.newPdcForm.reset();
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

  async getAllSectors() {
    try {
      let response = await this.sectorService.getAll();

      if(response) {
        this.listSectors = response.map((item: SectorModel) => {
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

  async closeModal(isCallback: boolean = false) {
    await this.modalController.dismiss(isCallback, 'pdc');
  }

  handleFile(file: File) {
    this.image = file;
  }
}
