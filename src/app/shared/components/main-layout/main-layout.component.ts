import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  token = localStorage.getItem('token');
  isUserLoggedIn: boolean;

  constructor(public auth: AuthService, private router: Router) {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  goToUserInfoPage(): void {
    this.router.navigate(['/userinfo']);
  }
}
