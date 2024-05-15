import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicFormBase } from '../dynamic-form-base/dynamic-form-base.base';
import { RegisterDynamicService } from './register-dynamic.service';

@Component({
  selector: 'app-register-dynamic',
  templateUrl: './register-dynamic.component.html',
  styleUrl: './register-dynamic.component.scss'
})
export class RegisterDynamicComponent {
  registerForm$!: Observable<DynamicFormBase<string>[]>;

  timezones: string[] = ['en-ZA', 'en-BW', 'en-CA', 'fr-CA'];

  selectedValue: string = 'en-ZA';
  constructor(private registerDynamicService: RegisterDynamicService) {
    this.selectRegion('en-ZA');
  }

  selectRegion = (region: string): void => {
    this.registerForm$ = this.registerDynamicService.getRegister(region);
  }
}
