import { Component, OnInit, Input } from '@angular/core';

import { SearchService } from './../../shared/services/search.service';
import { Hero } from 'src/app/shared/services/interfaces/interface';

@Component({
  selector: 'app-hero-selection-item',
  templateUrl: './hero-selection-item.component.html',
  styleUrls: ['./hero-selection-item.component.scss'],
})
export class HeroSelectionItemComponent implements OnInit {
  @Input() hero: Hero;

  isDisabled: boolean = false;

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {
    this.loadDisabledBtn();
  }

  loadDisabledBtn() {
    const localHeroes = JSON.parse(localStorage.getItem('selectedHero'));

    const disableBtn = (localHero: Hero) => localHero.id === this.hero.id;

    if (localHeroes.some(disableBtn)) {
      this.isDisabled = true;
    }
  }

  addSelectedHero(): void {
    this.searchService.selectHero(this.hero);
    this.isDisabled = true;
  }
}
