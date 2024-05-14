import { Injectable } from '@angular/core';
import { DynamicForm } from './dynamic-form.class';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class DynamicFormService {

  toFormGroup(dynamicForm: DynamicForm<string>[]) {
    const group: any = {};
    dynamicForm.forEach((control) => {
      group[control.key] = control.required 
        ? new FormControl(control.value || '', Validators.required) 
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
