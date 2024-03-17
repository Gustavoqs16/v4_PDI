import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T, CreateDto, UpdateDto> {

  public base_url: string;

  constructor(public readonly http: HttpService<T>, base_url: string) {
    this.base_url = base_url;
  }

  getAll(): Promise<Array<T>> {
    return this.http.get(`${this.base_url}`);
  }

  getOne(id: number): Promise<T> {
    return this.http.get(`${this.base_url}/${id}`);
  }

  create(data: CreateDto): Promise<T> {
    return this.http.post(`${this.base_url}`, data);
  }

  update(id: number, data: UpdateDto): Promise<T> {
    return this.http.post(`${this.base_url}/${id}`, data);
  }

  delete(): Promise<T> {
    return this.http.delete(`${this.base_url}`)
  }
}
