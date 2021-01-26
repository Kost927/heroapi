import { PowerUpsService } from './../shared/services/power-ups.service';
import { LoginValidate } from './../shared/loginValidate';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/services/interfaces/interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  signIn: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private powerUpsService: PowerUpsService
  ) {}

  ngOnInit(): void {
    this.loginFormValidate();
  }

  loginFormValidate(): void {
    this.loginForm = new FormGroup({
      currentEmail: new FormControl('', [
        Validators.required,
        Validators.email,
        LoginValidate.existEmail,
      ]),
      currentPassword: new FormControl('', [
        Validators.required,
        LoginValidate.existPassword,
      ]),
    });
  }

  navigateToRegisterPage(): void {
    this.router.navigate(['/register']);
  }

  submitLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.signIn = true;

    const { currentEmail, currentPassword } = this.loginForm.value;

    const user: User = {
      email: currentEmail,
      password: currentPassword,
    };

    const allUsers = JSON.parse(localStorage.getItem('allUsers'));

    allUsers.forEach(({ email, password }) => {
      if (email === currentEmail && password === currentPassword) {
        this.authLoginSubscribe(user);
        localStorage.setItem('user', JSON.stringify(user));
      }
    });

    this.powerUpsService.setPowerUpsToLocalStorage();

    this.signIn = false;
  }

  authLoginSubscribe(user: User): void {
    this.auth.login(user).subscribe((value) => {
      this.router.navigate(['/heroselect']);
    });
  }

  ngIfEmailValidation(): boolean {
    return (
      this.loginForm.get('currentEmail').invalid &&
      this.loginForm.get('currentEmail').touched
    );
  }

  ngIfEmailRequired(): void {
    return this.loginForm.get('currentEmail').errors.required;
  }

  ngIfEmail(): void {
    return this.loginForm.get('currentEmail').errors.email;
  }

  ngIfEmailExist(): void {
    return this.loginForm.get('currentEmail').errors.emailValidator;
  }

  ngIfPasswordValidation(): boolean {
    return (
      this.loginForm.get('currentPassword').invalid &&
      this.loginForm.get('currentPassword').touched
    );
  }

  ngIfPasswordRequired(): void {
    return this.loginForm.get('currentPassword').errors.required;
  }

  ngIfPasswordExist(): void {
    return this.loginForm.get('currentPassword').errors.passwordValidator;
  }
}
