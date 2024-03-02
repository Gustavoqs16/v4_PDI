import { Injectable } from '@angular/core';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
import { AppConstants } from '../Contants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  private async request(method: string, url: string, data?: any): Promise<AxiosResponse> {
    let endpoint = AppConstants.URL_WEBSERVICE + url;
    const config: AxiosRequestConfig = {
      method,
      url: endpoint,
      data
    };

    return axios(config);
  }

  get(url: string): Observable<any> {
    return new Observable(observer => {
      this.request('GET', url)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  post(url: string, data: any): Observable<any> {
    return new Observable(observer => {
      this.request('POST', url, data)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  put(url: string, data: any): Observable<any> {
    return new Observable(observer => {
      this.request('PUT', url, data)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  delete(url: string): Observable<any> {
    return new Observable(observer => {
      this.request('DELETE', url)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
