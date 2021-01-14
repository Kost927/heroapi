import { Router } from '@angular/router';

import { LoginValidate } from './../shared/loginValidate';
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
    this.registerFormValidate();
  }

  registerFormValidate(): void {
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
        LoginValidate.existRegisterEmail,
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

    const { email, password, name } = this.registerForm.value;

    const newUser: NewUser = {
      id: Date.now(),
      email,
      password,
      name,
    };

    this.auth.registration(newUser);

    this.router.navigate(['/success']);
  }

  ngIfNameValidate(): boolean {
    return (
      this.registerForm.get('name').invalid &&
      this.registerForm.get('name').touched
    );
  }

  ngIfNamePattern(): void {
    return this.registerForm.get('name').errors.pattern;
  }

  ngIfNameMinLength(): void {
    return this.registerForm.get('name').errors.minlength;
  }

  ngIfNameRequiredLength(): void {
    return this.registerForm.get('name').errors.minlength.requiredLength;
  }

  ngIfNameActualLength(): void {
    return this.registerForm.get('name').errors.minlength.actualLength;
  }

  ngIfNameRequired(): void {
    return this.registerForm.get('name').errors.required;
  }

  ngIfEmailValidate(): boolean {
    return (
      this.registerForm.get('email').invalid &&
      this.registerForm.get('email').touched
    );
  }

  ngIfEmailRequired(): void {
    return this.registerForm.get('email').errors.required;
  }

  ngIfEmail(): void {
    return this.registerForm.get('email').errors.email;
  }

  ngIfEmailPattern(): void {
    return this.registerForm.get('email').errors.pattern;
  }

  ngIfEmailExist(): void {
    return this.registerForm.get('email').errors.emailValidator;
  }

  ngIfPasswordValidate(): boolean {
    return (
      this.registerForm.get('password').invalid &&
      this.registerForm.get('password').touched
    );
  }

  ngIfPasswordRequired(): void {
    return this.registerForm.get('password').errors.required;
  }

  ngIfPasswordMinLength(): void {
    return this.registerForm.get('password').errors.minlength;
  }

  ngIfPasswordRequiredLength(): void {
    return this.registerForm.get('password').errors.minlength.requiredLength;
  }

  ngIfPasswordActualLength(): void {
    return this.registerForm.get('password').errors.minlength.actualLength;
  }

  ngIfPasswordPattern(): void {
    return this.registerForm.get('password').errors.pattern;
  }

  ngIfPasswordUniq(): void {
    this.registerForm.get('password').errors.emailIncludes ||
      this.registerForm.get('password').errors.firstNameWithSpaceIncludes ||
      this.registerForm.get('password').errors.secondNameWithSpaceIncludes ||
      this.registerForm.get('password').errors.firstNameWithDashIncludes ||
      this.registerForm.get('password').errors.secondNameWithDashIncludes;
  }
}
