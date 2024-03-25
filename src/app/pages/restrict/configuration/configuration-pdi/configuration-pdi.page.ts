import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PdiModel } from 'src/app/@core/domain/models/pdi/pdi.model';
import { CreatePdiDto } from 'src/app/@core/domain/models/pdi/dto/pdiCreateDto.model';
import { PdiService } from 'src/app/services/v1/pdi/pdi.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-configuration-pdi',
  templateUrl: './configuration-pdi.page.html',
  styleUrls: ['./configuration-pdi.page.scss'],
})
export class ConfigurationPdiPage implements OnInit {

  listPdi: Array<PdiModel> = [];
  newPdi: CreatePdiDto = {name: ""};
  newPdiForm: FormGroup;


  constructor(private pdiService: PdiService, private readonly toast: ToastService) {
    this.newPdiForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getAllPdi();
  }

  async createdPdi(){
    try {
      if (this.newPdiForm.valid) {
        const objRequest = this.newPdiForm.value;
        let response = await this.pdiService.create(objRequest);
        await this.toast.show(`PDI ${response?.name} criado com sucesso`, 'success');
        this.getAllPdi();
      } else {
        await this.toast.show("Por favor, preencha os campos corretamente.", 'danger');
      }
    } catch (error) {
      await this.toast.show("Formulário inválido. Por favor, preencha os campos corretamente.", 'danger');
    }
  }

  async deletePdi(id: number){
    try {
      if(id) {
        let response = await this.pdiService.delete(id);
        await this.toast.show(`PDI deletado com sucesso`, 'success');
      } else {
        await this.toast.show("PDI não encontrado", 'danger');
      }
    } catch (error) {
      await this.toast.show("Formulário inválido. Por favor, preencha os campos corretamente.", 'danger');
    }
  }

  async getAllPdi(){
    try {
        let response = await this.pdiService.getAll();
        this.listPdi = response;
    } catch (error) {
      await this.toast.show("Formulário inválido. Por favor, preencha os campos corretamente.", 'danger')
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
}
