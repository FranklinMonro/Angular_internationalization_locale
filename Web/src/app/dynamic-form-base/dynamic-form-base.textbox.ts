import { DynamicFormBase } from "./dynamic-form-base.base";

export class DynamicFormBaseTextbox extends DynamicFormBase<string> {
    override controlType: string = 'textbox';
}