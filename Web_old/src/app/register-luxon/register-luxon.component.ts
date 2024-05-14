import { Component } from '@angular/core';
import { RegisterFormService } from '../register/register-form.service';
import { Observable } from 'rxjs';
import { DynamicForm } from '../dynamic-form/dynamic-form.class';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-register-luxon',
  templateUrl: './register-luxon.component.html',
  styleUrl: './register-luxon.component.scss',
})
export class RegisterLuxonComponent {

  registerForm$!: Observable<DynamicForm<any>[]>

  constructor(private formService: RegisterFormService) {
    this.registerForm$ = formService.getRegisterForm(DateTime.now().locale);
    console.log(this.registerForm$)
  }
}
