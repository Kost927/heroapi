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
  signIn = false;

  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit(): void {
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

  navigateToRegisterPage() {
    this.router.navigate(['/register']);
  }

  submitLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    this.signIn = true;

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    const allUsers = JSON.parse(localStorage.getItem('allUsers'));
    allUsers.forEach((el) => {
      if (
        el.email === this.loginForm.value.email &&
        el.password === this.loginForm.value.password
      ) {
        this.auth.login(user).subscribe((value) => {
          this.loginForm.reset();
          this.router.navigate(['/test']);
        });
        localStorage.setItem('user', JSON.stringify(user));
      }
    });

    this.signIn = false;
  }
}
