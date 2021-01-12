import { Router } from '@angular/router';
import { SearchService } from './../../shared/services/search.service';
import { Hero } from './../../shared/services/interfaces/interface';
import { Component, OnInit } from '@angular/core';

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

  public getSelectedHeroes(): void {
    if (this.firstInit) {
      this.selectedHeroes = JSON.parse(localStorage.getItem('selectedHero'));
      this.lastSelectedHero = JSON.parse(
        localStorage.getItem('lastSelectedHero')
      );
      this.firstInit = false;
    }
  }

  public onSelectHero(hero: any): void {
    this.activeHero = hero;
  }

  public goToHeroesSelectPage() {
    this.router.navigate(['/heroselect']);
  }
}
