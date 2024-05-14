import { Component, Input } from '@angular/core';
import { DynamicForm } from './dynamic-form.class';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlService } from './dynamic-form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  // providers: [DynamicFormControlService]
})
export class DynamicFormComponent {
  @Input() dynamicForm!: DynamicForm<string>[];
  form!: FormGroup;

  constructor(private controlService: DynamicFormControlService) {
    console.log('dynamicForm', this.dynamicForm)
    this.form = this.controlService.toFormGroup(this.dynamicForm as DynamicForm<string>[]);
    console.log('form', this.form);
  }
  
  // get isValid() {
  //   // return this.form.controls[this.dynamicForm?.key].valid;
  // }
}
