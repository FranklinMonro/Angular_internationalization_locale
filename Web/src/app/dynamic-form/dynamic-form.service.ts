import { Injectable } from '@angular/core';
import { DynamicForm } from './dynamic-form.class';
import { TextboxControl } from './dynamic-form.textbox';
import { DropdownControl } from './dynamic-form.dropdown';
import { of } from 'rxjs';

interface IdentificationRegister {
  key: string;
  label: string;
  required: boolean;
}

@Injectable()
export class DynamicFormService {

  getRegisterForm(localeID: string) {
    const countryIdentification: IdentificationRegister = this.registerFormIdentification(localeID);
    const registerForm: DynamicForm<string>[] = [
      new TextboxControl({
        key: 'firstname',
        label: 'Firstname',
        required: true,
        order: 1,
      }),

      new TextboxControl({
        key: 'firstname',
        label: 'Firstname',
        required: true,
        order: 2,
      }),

      new TextboxControl({
        key: countryIdentification.key,
        label: countryIdentification.label,
        required: countryIdentification.required,
        order: 3,
      }),

      new DropdownControl({
        key: 'language',
        label: 'Language',
        options: [
          {key: 'setswana',  value: 'Setswana'},
          {key: 'afrikaans',  value: 'Afrikaans'},
          {key: 'english',  value: 'English'},
          {key: 'french',  value: 'French'},
        ],
        order: 4,
      }),
    ];
    return of(registerForm.sort((a, b) => a.order - b.order));
  };

  registerFormIdentification(localeID: string): IdentificationRegister {
    let key: string = '';
    let label: string = '';
    let required: boolean = false;
    switch (localeID) {
      case 'en-ZA':
        key = 'idNumber';
        label = 'ID Number';
        required = true;
        break;
      case 'en-BW':
        key = 'idNumber';
        label = 'ID Number';
        required = false;
        break;
      case 'en-CA' || 'fr-CA':
        key = 'socialSecurityNumber';
        label = 'Social Security Number';
        required = true;
        break;
      default:
        key = 'idNumber';
        label = 'ID Number';
        required = true;
        break;
    }
    return {key, label, required};
  }
}
