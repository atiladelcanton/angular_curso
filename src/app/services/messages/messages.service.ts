import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  message: string = '';
  constructor() {}

  add(message: string) {
    this.message = message;
    setTimeout(() => {
      this.clear();
    }, 400);
  }
  clear() {
    this.message = '';
  }
}
