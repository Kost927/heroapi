import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successfully-registered',
  templateUrl: './successfully-registered.component.html',
  styleUrls: ['./successfully-registered.component.scss'],
})
export class SuccessfullyRegisteredComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToLoginPage(): void {
    this.router.navigate(['/']);
  }
}
