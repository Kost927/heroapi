import { Component, Input } from '@angular/core';

import { PowerUpsService } from './../../shared/services/power-ups.service';
import { Hero, PowerUp } from './../../shared/services/interfaces/interface';

@Component({
  selector: 'app-battle-power-ups',
  templateUrl: './battle-power-ups.component.html',
  styleUrls: ['./battle-power-ups.component.scss'],
})
export class BattlePowerUpsComponent {
  @Input() powerup: PowerUp;
  @Input() selectedHero: Hero;

  constructor(public powerUpsService: PowerUpsService) {}

  selectPowerUp(): void {
    this.powerUpsService.filteredPowerUps.map((power) => {
      if (power.title === this.powerup.title && power.usesLeft > 0) {
        power.isSelected = !power.isSelected;
        this.powerUpsService.isSelected = power.isSelected;
      }
      if (
        power.isSelected &&
        power.title === this.powerup.title &&
        power.usesLeft > 0
      ) {
        power.usesLeft -= 1;
      } else if (
        !power.isSelected &&
        power.title === this.powerup.title &&
        power.usesLeft > 0
      ) {
        power.usesLeft += 1;
      }
    });
    localStorage.setItem(
      'powers',
      JSON.stringify(this.powerUpsService.filteredPowerUps)
    );
  }
}
