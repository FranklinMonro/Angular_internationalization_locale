import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-register-localization',
  templateUrl: './register-localization.component.html',
  styleUrl: './register-localization.component.scss'
})
export class RegisterLocalizationComponent {
  registerForm: FormGroup | undefined;
  
  selectedValue: string = DateTime.now().zoneName;
  constructor(private formBuilder: FormBuilder,) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      idNumber: [null, [Validators.required]],
      luxon_date: [DateTime.now().toISO()!],
      javascript_date: [new Date().toISOString()]
    });
  }

  onSubmit() {
    console.log('onSubmit');
  }

}
