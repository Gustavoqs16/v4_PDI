import { environment } from 'src/environments/environment';
import { ToastService } from '../toast/toast.service';
import { StorageService } from '../storage/storage.service';
import { Injectable } from '@angular/core';
import { ErrorModel } from 'src/app/@core/domain/models/error/error.model';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {

  url: string;
  token: string;
  headers: Headers;

  constructor(
    private readonly toast: ToastService,
    private readonly storageService: StorageService,
    private loadingService: LoadingService
  ) {
    this.url = environment.url;
    this.init();
  }

  private checkInit() {
    if (!this.url) throw new Error('Url não configurada')
  }

  private checkToken() {

    const token = this.storageService.get('token');

    if (!!token) {
      this.headers.append('Authorization', `Bearer ${token}`);
    } else {
      this.headers.delete('Authorization');
    }

  }

  private init() {
    try {

      this.checkInit();

      this.headers = new Headers({
        'Content-Type': 'application/json'
      });

      this.checkToken();

    } catch (error: any) {
      this.toast.show(error.message || 'Erro não esperado')
    }
  }

  private checkStatusText(result: any) {

    let message: string = '';

    if (!!result.status && result.status >= 400) {

      const error: ErrorModel = result;

      if (error.message instanceof Array) {
        error.message = error.message.map(e => e.includes('prisma') ? 'Erro no banco de dados' : e);
        message = error.message.join(',');
      } else {
        message = error.message;
      }
    }

    return !message ? 'Erro não indentificado' : message;
  }

  private async tratamentStatusCode<T>(res: Response) {

    const { status } = res;

    const result = (await res.json()) as any;

    switch (status) {
      case 400:
        this.toast.show(this.checkStatusText(result));
        return null;
      case 401:
        this.toast.show(this.checkStatusText(result));
        return null;
      case 403:
        this.toast.show(this.checkStatusText(result));
        return null;
      case 404:
        this.toast.show(this.checkStatusText(result));
        return null;
      case 405:
        this.toast.show(this.checkStatusText(result));
        return null;
      case 422:
        this.toast.show(this.checkStatusText(result));
        return null;
      case 500:
        this.toast.show(this.checkStatusText(result));
        return null;
      case 200:
        return result;
      case 201:
        return result;
      default:
        return null;
    }
  }

  async get(url: string) {
    await this.loadingService.showLoading();
    const res = await fetch(`${this.url}/${url}`, {
      method: 'GET',
      headers: this.headers
    });

    await this.loadingService.hideLoading();
    return this.tratamentStatusCode<T>(res);
  }

  async post<Model>(url: string, data: Model) {
    await this.loadingService.showLoading();
    const res = await fetch(`${this.url}/${url}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    });

    await this.loadingService.hideLoading();
    return this.tratamentStatusCode<T>(res);
  }

  async put<Model>(url: string, data: Model) {
    await this.loadingService.showLoading();
    const res = await fetch(`${this.url}/${url}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data)
    });

    await this.loadingService.hideLoading();
    return this.tratamentStatusCode<T>(res);
  }

  async delete(url: string) {
    await this.loadingService.showLoading();

    const res = await fetch(`${this.url}/${url}`, {
      method: 'DELETE',
      headers: this.headers,
    });

    await this.loadingService.hideLoading();
    return this.tratamentStatusCode<T>(res);
  }
}
