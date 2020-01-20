import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  private loggingEnabled = true;
  public log(data) {
    if (this.loggingEnabled) {
      console.log(data);
    }
  }
}
