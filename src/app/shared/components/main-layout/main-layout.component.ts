import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { DataSharingServiceService } from '../../services/data-sharing-service.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  isSelectedHero: string = localStorage.getItem('selectedHero');
  isSelectedHeroes: boolean;
  isDisabled: boolean = false;

  constructor(
    public auth: AuthService,
    private router: Router,
    private dataSharingService: DataSharingServiceService
  ) {
    this.fightBtnActiveService();
  }

  ngOnInit() {
    this.fightBtnActive();
  }

  logout(): void {
    this.auth.logout();
  }

  goToUserInfoPage(): void {
    this.router.navigate(['/userinfo']);
  }

  fightBtnActive(): void {
    if (!this.isSelectedHero) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  fightBtnActiveService(): void {
    this.dataSharingService.isSelectedHeroes.subscribe((value) => {
      this.isSelectedHeroes = value;
    });
  }
}
