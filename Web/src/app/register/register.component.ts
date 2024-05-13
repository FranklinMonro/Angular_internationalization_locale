import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | undefined;

  constructor(@Inject(LOCALE_ID) locale: string, private fb: FormBuilder) {
    console.log('locale', locale);
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: [],
      surname: [],
      idNumber: [],
      passportNumber: [],
      socialSecurityNumber: [],
    });
  }
}
