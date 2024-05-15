import { Component, Input, OnInit } from '@angular/core';
import { DynamicFormBase } from './dynamic-form-base.base';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlService } from './dynamic-form-control.service';

@Component({
  selector: 'app-dynamic-form-base',
  templateUrl: './dynamic-form-base.component.html',
  styleUrl: './dynamic-form-base.component.scss'
})
export class DynamicFormBaseComponent implements OnInit {
  @Input() inputForm: DynamicFormBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private dynamicFormControlService: DynamicFormControlService) {}

  ngOnInit(): void {
    this.form = this.dynamicFormControlService.toFormGroup(this.inputForm as DynamicFormBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
