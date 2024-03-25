import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading: HTMLIonLoadingElement;

  constructor(public loadingController: LoadingController) {}

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Por favor, aguarde...',
      // aqui você pode adicionar mais configurações conforme necessário
    });
    await this.loading.present();
  }

  async hideLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }
}
