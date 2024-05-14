import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
      firstname: [null, [this.checkIfDisabled.bind(this)]],
      surname: [null, [this.checkIfDisabled.bind(this)]],
      idNumber: [null, [this.checkIfDisabled.bind(this)]],
      passportNumber: [null, [this.checkIfDisabled.bind(this)]],
      socialSecurityNumber: [null, [this.checkIfDisabled.bind(this)]],
    });
  }

  checkIfDisabled(control: AbstractControl) {
    const parentControl = control['_parent']?.controls;
    if (parentControl) {
      const controlName = Object.keys(parentControl)
        .map((name) => (control === parentControl[name] ? name : null))
        .filter((notNull) => notNull)[0];
      const replaceControlName = controlName!.replace(/([a-z])([A-Z])/g, '$1 $2');
      if (replaceControlName.indexOf(' ') >= 0) {
        const splitControlName = replaceControlName.split(' ');
        const firstWord = this.capatalizeFirstLetter(splitControlName[0]);
        splitControlName[0] = firstWord;
        console.log('join', splitControlName.join(' '));
      }
      console.log('replaceControlName', this.capatalizeFirstLetter(replaceControlName));
    }
  }

  capatalizeFirstLetter(controlName: string) {
    if (controlName.length < 3) {
      return controlName.toUpperCase();
    }
    return controlName.charAt(0).toUpperCase() + controlName.slice(1);
  }
}
