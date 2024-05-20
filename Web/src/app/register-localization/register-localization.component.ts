import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register-localization',
  templateUrl: './register-localization.component.html',
  styleUrl: './register-localization.component.scss'
})
export class RegisterLocalizationComponent {
  registerForm: FormGroup | undefined;
  
  constructor(
    private formBuilder: FormBuilder, 
    @Inject(LOCALE_ID) public locale: string,
    private appService: AppService,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.selectRegion(this.locale);
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      idNumber: [null, [Validators.required]],
      luxon_date: [DateTime.now().toISO()],
      javascript_date: [new Date().toISOString()],
      component: ['register-localization'],
      timezone: [this.locale],
    });
  }

  selectRegion(timeZone: string) {
    if (timeZone === 'en-BW') {
      this.registerForm?.get('idNumber')?.enable();
      this.registerForm?.get('idNumber')?.clearValidators();
    } else if (timeZone === 'fr-CA') {
      this.registerForm?.get('idNumber')?.disable();
      this.registerForm?.get('idNumber')?.clearValidators();
    } else {
      this.registerForm?.get('idNumber')?.enable();
      this.registerForm?.get('idNumber')?.setValidators([Validators.required]);
    }
    // this.registerForm?.get('luxon_date')?.patchValue(DateTime.now().setZone(timeZone).toISO()!)
  }

  onSubmit() {
    this.appService.postRegisters(this.registerForm?.value).subscribe({
      next: (status: number) => {
        status === 201 ? console.log('Posted') : console.log('Not Posted');
      },
      error: (err: ErrorEvent) => {
        console.error(err.message);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

}
