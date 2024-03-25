import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PdiModel } from 'src/app/@core/domain/models/pdi/pdi.model';
import { CreatePdiDto } from 'src/app/@core/domain/models/pdi/dto/pdiCreateDto.model';
import { PdiService } from 'src/app/services/v1/pdi/pdi.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-configuration-pdi',
  templateUrl: './configuration-pdi.page.html',
  styleUrls: ['./configuration-pdi.page.scss'],
})
export class ConfigurationPdiPage implements OnInit {

  listPdi: Array<CreatePdiDto> = [];
  newPdi: CreatePdiDto = {name: ""};
  newPdiForm: FormGroup;


  constructor(private pdiService: PdiService, private readonly toast: ToastService) {
    this.newPdiForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  async createdPdi(){
    try {
      if (this.newPdiForm.valid) {
        const objRequest = this.newPdiForm.value;
        this.pdiService.create(objRequest);
      } else {
        await this.toast.show("Formulário inválido. Por favor, preencha os campos corretamente.")
      }
    } catch (error) {
      await this.toast.show("Formulário inválido. Por favor, preencha os campos corretamente.", 'danger')
    }
  }
}
