import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DynamicFormBase } from './dynamic-form-base.base';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlService } from './dynamic-form-control.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dynamic-form-base',
  templateUrl: './dynamic-form-base.component.html',
  styleUrl: './dynamic-form-base.component.scss'
})
export class DynamicFormBaseComponent implements OnChanges {
  @Input() inputForm: DynamicFormBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(
    private dynamicFormControlService: DynamicFormControlService,
    private appService: AppService,
  ) {}
  

  ngOnChanges(): void {
    this.form = this.dynamicFormControlService.toFormGroup(this.inputForm as DynamicFormBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.appService.postRegisters(this.form.getRawValue()).subscribe({
      next: () => {
        console.log('Posted')
      },
      error: (err: ErrorEvent) => {
        console.error(err.message);
      },
      complete: () => {
        console.log('complete');
      },
    })
  }
}
