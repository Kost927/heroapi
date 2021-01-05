import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { NewUser } from './../shared/services/interfaces/interface';
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

  constructor(private auth: AuthService, private router: Router) {}

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
    if (this.registerForm.invalid) {
      return;
    }

    const newUser: NewUser = {
      id: Date.now(),
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      name: this.registerForm.value.name,
    };

    this.auth.registration(newUser);

    this.router.navigate(['/success']);
  }
}
