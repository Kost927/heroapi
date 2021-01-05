import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
