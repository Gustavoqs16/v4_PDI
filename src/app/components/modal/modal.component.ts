import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() data: any;

  @ViewChild('dynamicContent', { read: TemplateRef }) dynamicContent!: TemplateRef<any>;
  constructor(
    private modalController: ModalController
  ) {}

  ngOnInit() {}

async closeModal() {
  await this.modalController.dismiss();
}

}
