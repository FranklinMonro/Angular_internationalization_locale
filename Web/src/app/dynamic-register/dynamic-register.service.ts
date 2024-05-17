import { Injectable } from '@angular/core';
import { DynamicFormBase } from '../dynamic-form-base/dynamic-form-base.base';
import { of } from 'rxjs';
import { DynamicFormBaseDropdown } from '../dynamic-form-base/dynamic-form-base.dropdown';
import { DynamicFormBaseTextbox } from '../dynamic-form-base/dynamic-form-base.textbox';
import { DynamicFormBaseDatebox } from '../dynamic-form-base/dynamic-form-base.datebox';
import { DateTime } from 'luxon';

interface IdentificationRegister {
    key: string;
    label: string;
    required: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class RegisterDynamicService {

    constructor() { }

    getRegister(localeID: string) {
        const countryIdentification: IdentificationRegister = this.registerFormIdentification(localeID);
        const registerForm: DynamicFormBase<string>[] = [
            new DynamicFormBaseTextbox({
                key: 'firstname',
                label: 'Firstname',
                required: true,
                order: 1,
            }),

            new DynamicFormBaseTextbox({
                key: 'surname',
                label: 'Surname',
                required: true,
                order: 2,
            }),

            new DynamicFormBaseTextbox({
                key: countryIdentification.key,
                label: countryIdentification.label,
                required: countryIdentification.required,
                order: 3,
            }),

            new DynamicFormBaseDropdown({
                key: 'language',
                label: 'Language',
                options: [
                    { key: 'setswana', value: 'Setswana' },
                    { key: 'afrikaans', value: 'Afrikaans' },
                    { key: 'english', value: 'English' },
                    { key: 'french', value: 'French' },
                ],
                order: 4,
            }),

            new DynamicFormBaseDatebox({
                key: 'luxon_date',
                label: 'Luxon Date',
                value: DateTime.now().setZone(localeID).toISO()!,
                required: true,
                order: 5,
            }),

            new DynamicFormBaseDatebox({
                key: 'javascript_date',
                label: 'Javascript Date',
                value: new Date().toISOString(),
                required: true,
                order: 6,
            }),

            new DynamicFormBaseTextbox({
                key: 'component',
                label: 'Component',
                value: 'dynamic-register',
                disabled: true,
                required: true,
                order: 7,
            }),

            new DynamicFormBaseTextbox({
                key: 'timezone',
                label: 'Timezone',
                value: localeID,
                disabled: true,
                required: true,
                order: 8,
            }),
        ];
        return of(registerForm.sort((a, b) => a.order - b.order));
    };

    private registerFormIdentification(localeID: string): IdentificationRegister {
        let key: string = '';
        let label: string = '';
        let required: boolean = false;
        switch (localeID) {
            case 'Africa/Johannesburg':
                key = 'idNumber';
                label = 'ID Number';
                required = true;
                break;
            case 'Africa/Gaborone':
                key = 'idNumber';
                label = 'ID Number';
                required = false;
                break;
            case 'Canada/Central':
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
        return { key, label, required };
    }
}