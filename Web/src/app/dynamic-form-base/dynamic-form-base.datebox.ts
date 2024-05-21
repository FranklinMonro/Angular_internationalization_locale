import { DynamicFormBase } from "./dynamic-form-base.base";

export class DynamicFormBaseDatebox extends DynamicFormBase<string> {
    override controlType: string = 'datebox';
}