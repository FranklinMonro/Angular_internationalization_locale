import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { DynamicFormBase } from '../dynamic-form-base/dynamic-form-base.base';
import { RegisterDynamicService } from './dynamic-register.service';

@Component({
  selector: 'app-dynamic-register',
  templateUrl: './dynamic-register.component.html',
  styleUrl: './dynamic-register.component.scss'
})
export class DynamicRegisterComponent {
  registerForm$!: Observable<DynamicFormBase<string>[]>;

  timezones: string[] = ['Africa/Johannesburg', 'Africa/Gaborone', 'Canada/Central'];

  selectedValue: string = DateTime.now().zoneName;

  constructor(private registerDynamicService: RegisterDynamicService) {
    this.selectRegion(this.selectedValue);
  }

  selectRegion = (region: string): void => {
    this.registerForm$ = this.registerDynamicService.getRegister(region);
  }
}
