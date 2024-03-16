import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private readonly toastController: ToastController) { }

  async show(
    message: string,
    color: 'danger' | 'success' = 'danger',
    position: 'top' | 'middle' | 'bottom' = 'bottom'
  ) {
    const toast = await this.toastController.create({ message, duration: 1500, position, color });

    await toast.present();
  }
}
