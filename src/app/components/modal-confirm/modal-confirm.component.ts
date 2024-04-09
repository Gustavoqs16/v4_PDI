import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  confirm() {
    this.modalController.dismiss({ confirmed: true });
  }

  cancel() {
    this.modalController.dismiss({ confirmed: false });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
