import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-successfully-registered',
  templateUrl: './successfully-registered.component.html',
  styleUrls: ['./successfully-registered.component.scss'],
})
export class SuccessfullyRegisteredComponent {
  constructor(private router: Router) {}

  goToLoginPage(): void {
    this.router.navigate(['/']);
  }
}
