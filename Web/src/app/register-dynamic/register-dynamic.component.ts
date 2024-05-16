import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicFormBase } from '../dynamic-form-base/dynamic-form-base.base';
import { RegisterDynamicService } from './register-dynamic.service';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-register-dynamic',
  templateUrl: './register-dynamic.component.html',
  styleUrl: './register-dynamic.component.scss'
})
export class RegisterDynamicComponent {
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
