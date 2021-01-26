import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ResultModalComponent } from './result-modal/result-modal.component';
import { PowerUpsService } from './../shared/services/power-ups.service';
import { HistoryService } from './../shared/services/history.service';
import { SearchService } from './../shared/services/search.service';
import {
  Hero,
  PowerUp,
  History,
} from './../shared/services/interfaces/interface';
import constants from '../shared/constants';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.scss'],
})
export class BattlePageComponent implements OnInit {
  powerups: PowerUp[] = this.powerUpsService.getPowerUpsFromLocalStorage();
  baseUrl: string = constants.BASE_URL;
  battleHistory: History;
  selectedHero: Hero;
  enemyHero: Hero;
  loading: boolean;
  id: any;
  fightAnimate: string;
  massage: string;
  selectedHeroPower: number;
  enemyHeroPower: number;
  selectedRandomHeroPower: number;
  enemyHeroRandomPower: number;

  constructor(
    private searchService: SearchService,
    private historyService: HistoryService,
    public powerUpsService: PowerUpsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.yourSelectedHero();
    this.yourEnemyHero();
    this.powerUpsSelection();
  }

  yourSelectedHero(): void {
    this.selectedHero = JSON.parse(localStorage.getItem('activeHero'));
  }

  yourEnemyHero(): void {
    const firstHero: number = 1;
    const lastHero: number = 731;

    this.id = Math.floor(Math.random() * lastHero) + firstHero;

    this.searchService.getById(this.id).subscribe((hero) => {
      this.enemyHero = hero;
      this.getEnemyHeroPower();
      this.getSelectedHeroPower();
    });
  }

  battle(): void {
    this.randomBattleResultGenerate();

    this.loading = true;

    setTimeout(() => {
      this.loading = false;

      if (this.selectedRandomHeroPower < this.enemyHeroRandomPower) {
        this.massage = constants.LOSE;
        this.openModal();
        this.setHistory();
      } else {
        this.massage = constants.WIN;
        this.openModal();
        this.setHistory();
      }
      this.powerUpsSelection();
      this.yourEnemyHero();
    }, 5000);
  }

  randomBattleResultGenerate(): void {
    const firstRandomNumber: number = Math.floor(Math.random() * 1.4) + 1;
    const secondRandomNumber: number = Math.floor(Math.random() * 1.4) + 1;

    this.selectedRandomHeroPower = this.selectedHeroPower * firstRandomNumber;
    this.enemyHeroRandomPower = this.enemyHeroPower * secondRandomNumber;
  }

  setHistory(): void {
    this.battleHistory = {
      date: new Date(),
      heroName: this.selectedHero.name,
      heroNameId: this.selectedHero.id,
      enemyName: this.enemyHero.name,
      enemyNameId: this.enemyHero.id,
      result:
        this.selectedRandomHeroPower < this.enemyHeroRandomPower
          ? 'lose'
          : 'win',
    };
    this.historyService.setHistoryToLocalStorage(this.battleHistory);
  }

  getSelectedHeroPower(): void {
    const powers = Object.values(this.selectedHero.powerstats);
    this.selectedHeroPower = powers.reduce((acc, power) => {
      return acc + +power;
    }, 0);
  }

  getEnemyHeroPower(): void {
    const powers = Object.values(this.enemyHero.powerstats);
    this.enemyHeroPower = powers.reduce((acc, power) => {
      return acc + +power;
    }, 0);
  }

  addPowerUps(): void {
    const powerUpNumber: number = 10;

    if (this.powerUpsService.isSelected) {
      this.selectedHeroPower = this.selectedHeroPower + powerUpNumber;
    } else {
      this.selectedHeroPower = this.selectedHeroPower - powerUpNumber;
    }
  }

  openModal() {
    this.dialog.open(ResultModalComponent, {
      data: {
        result: this.massage,
      },
      height: constants.MODAL_HEIGHT,
      width: constants.MODAL_WIDTH,
    });
  }

  powerUpsSelection(): void {
    this.powerUpsService.filteredPowerUps.map((power) => {
      power.isSelected = false;
    });
  }
}
