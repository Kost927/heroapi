import { Injectable } from '@angular/core';

import { PowerUp } from './interfaces/interface';
import constants from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class PowerUpsService {
  isSelected: boolean;
  filteredPowerUps: PowerUp[];

  powerUps: PowerUp[] = [
    {
      title: 'Captain America shield',
      image: constants.CAPTAIN_AMERICA_SHIELD,
      description: 'durability +10',
      usesLeft: 3,
    },
    {
      title: 'Mjolnir',
      image: constants.MJOLNIR,
      description: 'power +10',
      usesLeft: 3,
    },
    {
      title: 'Ironman nano armor',
      image: constants.IRON_MAN_ARMOR,
      description: 'combat +10',
      usesLeft: 3,
    },
    {
      title: 'Dr. Strange s cloak',
      image: constants.DR_STRANGE_CLOAK,
      description: 'intelligence +10',
      usesLeft: 3,
    },
    {
      title: 'Green lantern s ring',
      image: constants.GREEN_LANTERN_RING,
      description: 'strength +10',
      usesLeft: 3,
    },
    {
      title: 'Flash boots',
      image: constants.FLASH_BOOTS,
      description: 'speed +10',
      usesLeft: 3,
    },
  ];

  setPowerUpsToLocalStorage(): void {
    return localStorage.setItem('powers', JSON.stringify(this.powerUps));
  }

  getPowerUpsFromLocalStorage(): PowerUp[] {
    return (this.filteredPowerUps = JSON.parse(localStorage.getItem('powers')));
  }

  powerUpsSorting(): PowerUp[] {
    this.filteredPowerUps = this.getPowerUpsFromLocalStorage();
    const unusedPowerups = this.filteredPowerUps?.filter(
      (powerup) => powerup.usesLeft > 0
    );
    const usedPowerups = this.filteredPowerUps?.filter(
      (powerup) => powerup.usesLeft === 0
    );
    return (this.filteredPowerUps = [...unusedPowerups, ...usedPowerups]);
  }
}
