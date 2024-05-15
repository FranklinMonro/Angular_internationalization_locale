import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormBase } from '../dynamic-form-base.base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  @Input() inputControl!: DynamicFormBase<string>;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.inputControl.key].valid;
  }
}
