import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private timeZone = DateTime.now().locale;

  get localTimeZone(): string {
    return this.timeZone;
  }
  constructor() { }
}
