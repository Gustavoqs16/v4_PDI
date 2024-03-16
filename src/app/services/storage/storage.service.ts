import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clearStorage(): void {
    localStorage.clear();
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }
}
