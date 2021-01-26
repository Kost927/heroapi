import { Component } from '@angular/core';

import { PowerUpsService } from './../shared/services/power-ups.service';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss'],
})
export class UserInfoPageComponent {
  constructor(public powerUpsService: PowerUpsService) {}
}
