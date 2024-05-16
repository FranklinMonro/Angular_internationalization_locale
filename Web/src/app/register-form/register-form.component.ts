import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-dynamic',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup | undefined;

  timezones: string[] = ['Africa/Johannesburg', 'Africa/Gaborone', 'Canada/Central'];

  selectedValue: string = DateTime.now().zoneName;
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.selectRegion(this.selectedValue);
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      idNumber: [null, [Validators.required]],
      luxon_date: [DateTime.now().setZone(this.selectedValue).toISO()!],
      javascript_date: [new Date().toISOString()]
    });
  }

  selectRegion(timeZone: string) {
    if (timeZone === 'Africa/Gaborone') {
      this.registerForm?.get('idNumber')?.enable();
      this.registerForm?.get('idNumber')?.clearValidators();
    } else if (timeZone === 'Canada/Central') {
      this.registerForm?.get('idNumber')?.disable();
      this.registerForm?.get('idNumber')?.clearValidators();
    } else {
      this.registerForm?.get('idNumber')?.enable();
      this.registerForm?.get('idNumber')?.setValidators([Validators.required]);
    }
    this.registerForm?.get('luxon_date')?.patchValue(DateTime.now().setZone(timeZone).toISO()!)
  }

  onSubmit() {
    console.log('onSubmit');
  }
}
