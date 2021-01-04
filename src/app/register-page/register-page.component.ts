import { PasswordValidate } from './../shared/passwordValidate';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import constants from '../shared/constants';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(constants.NAME_VALIDATE),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(constants.EMAIL_VALIDATE),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(constants.PASSWORD_VALIDATE),
        PasswordValidate.uniqPassword,
      ]),
    });
  }

  submit(): void {
    console.log('form submitted', this.registerForm);
    const formData = { ...this.registerForm.value };
    console.log('formData---->', formData);
    // this.registerForm.reset();
  }
}
