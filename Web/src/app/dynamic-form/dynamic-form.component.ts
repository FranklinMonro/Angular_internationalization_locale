import { Component, Input } from '@angular/core';
import { DynamicForm } from './dynamic-form.class';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  @Input() dynamicForm!: DynamicForm<string>;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.dynamicForm.key].valid;
  }
}
