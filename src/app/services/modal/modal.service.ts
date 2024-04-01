// modal.service.ts
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public modalController: ModalController) {}

  async openModal(data: any) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { data },
    });
    return await modal.present();
  }
}
