import { Component, OnInit, Input } from '@angular/core';

import { PowerUp } from 'src/app/shared/services/interfaces/interface';

@Component({
  selector: 'app-power-ups-info',
  templateUrl: './power-ups-info.component.html',
  styleUrls: ['./power-ups-info.component.scss'],
})
export class PowerUpsInfoComponent implements OnInit {
  @Input() powerup: PowerUp;
  powerUps: PowerUp[];

  isDisabled: boolean = false;

  ngOnInit(): void {
    this.isDisabledPowerUp();
  }

  private isDisabledPowerUp(): void {
    if (this.powerup.usesLeft === 0) {
      this.isDisabled = true;
    }
  }
}
