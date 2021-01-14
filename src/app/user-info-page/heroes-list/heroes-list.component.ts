import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Hero } from './../../shared/services/interfaces/interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  selectedHeroes: Hero[];
  lastSelectedHero: Hero;
  activeHero: any;
  firstInit: boolean = true;
  lastHero: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getSelectedHeroes();
  }

  getSelectedHeroes(): void {
    if (this.firstInit) {
      this.selectedHeroes = JSON.parse(localStorage.getItem('selectedHero'));
      this.lastSelectedHero = JSON.parse(
        localStorage.getItem('lastSelectedHero')
      );
      this.firstInit = false;
    }
  }

  onSelectHero(hero: any): void {
    this.activeHero = hero;
  }

  goToHeroesSelectPage(): void {
    this.router.navigate(['/heroselect']);
  }
}
