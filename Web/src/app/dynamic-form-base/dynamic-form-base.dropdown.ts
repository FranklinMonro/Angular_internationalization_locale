import { DynamicFormBase } from "./dynamic-form-base.base";

export class DynamicFormBaseDropdown extends DynamicFormBase<string> {
    override controlType: string = 'dropdown';
}