import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

interface RegistrationInput {
  name: string;
  type: string;
  required: boolean;
  value: any;
  id: string;
}

@Component({
  selector: 'app-modal-registration',
  templateUrl: './modal-registration.component.html',
  styleUrls: ['./modal-registration.component.scss'],
})
export class ModalRegistrationComponent implements OnInit {
  @Input() title: string;
  @Input() inputs: RegistrationInput[];
  @Output() save = new EventEmitter<any>();

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {

  }

  onSave() {
    const result: any = {};
    for (const input of this.inputs) {
      result[input.id] = input.value;
    }
    this.modalCtrl.dismiss(result);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
