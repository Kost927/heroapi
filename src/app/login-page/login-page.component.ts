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

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.loginFormValidate();
  }

  loginFormValidate(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        LoginValidate.existEmail,
      ]),
      password: new FormControl('', [
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

    const { email, password } = this.loginForm.value;

    const user: User = {
      email,
      password,
    };

    const allUsers = JSON.parse(localStorage.getItem('allUsers'));

    allUsers.forEach(({ email, password }) => {
      if (email === email && password === password) {
        this.authLoginSubscribe(user);
        localStorage.setItem('user', JSON.stringify(user));
      }
    });

    this.signIn = false;
  }

  authLoginSubscribe(user: User): void {
    this.auth.login(user).subscribe((value) => {
      this.router.navigate(['/heroselect']);
    });
  }

  ngIfEmailValidation(): boolean {
    return (
      this.loginForm.get('email').invalid && this.loginForm.get('email').touched
    );
  }

  ngIfEmailRequired(): void {
    return this.loginForm.get('email').errors.required;
  }

  ngIfEmail(): void {
    return this.loginForm.get('email').errors.email;
  }

  ngIfEmailExist(): void {
    return this.loginForm.get('email').errors.emailValidator;
  }

  ngIfPasswordValidation(): boolean {
    return (
      this.loginForm.get('password').invalid &&
      this.loginForm.get('password').touched
    );
  }

  ngIfPasswordRequired(): void {
    return this.loginForm.get('password').errors.required;
  }

  ngIfPasswordExist(): void {
    return this.loginForm.get('password').errors.passwordValidator;
  }
}
