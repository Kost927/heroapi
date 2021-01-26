import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SearchService } from './../../shared/services/search.service';
import { Hero } from './../../shared/services/interfaces/interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  selectedHeroes: Hero[];
  lastSelectedHero: Hero;
  firstInit: boolean = true;
  lastHero: boolean = false;
  lastActiveHero: Hero;
  activeHero: Hero;

  constructor(public searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.getSelectedHeroes();
  }

  getSelectedHeroes(): void {
    this.selectedHeroes = JSON.parse(localStorage.getItem('selectedHero'));
  }

  onSelectHero(hero: Hero): void {
    this.activeHero = hero;
    localStorage.setItem('activeHero', JSON.stringify(this.activeHero));
  }

  goToHeroesSelectPage(): void {
    this.router.navigate(['/heroselect']);
  }
}
