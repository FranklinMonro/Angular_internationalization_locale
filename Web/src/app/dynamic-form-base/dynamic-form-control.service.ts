import { Injectable } from '@angular/core';
import { DynamicFormBase } from './dynamic-form-base.base';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormControlService {

  constructor() { }
  toFormGroup(control: DynamicFormBase<string>[]) {
    const group: any = {};

    control.forEach(ctrl => {
      group[ctrl.key] = ctrl.required 
        ? new FormControl(ctrl.value || '', Validators.required)
        : new FormControl(ctrl.value || ''); 
    });
    return new FormGroup(group);
  };
}
