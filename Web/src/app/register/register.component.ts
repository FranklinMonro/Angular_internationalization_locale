import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private appService: AppService) {
    console.log('timezone', this.appService.localTimeZone)
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
