import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { SearchService } from './../shared/services/search.service';
import { Hero } from '../shared/services/interfaces/interface';

@Component({
  selector: 'app-hero-info-page',
  templateUrl: './hero-info-page.component.html',
  styleUrls: ['./hero-info-page.component.scss'],
})
export class HeroInfoPageComponent implements OnInit {
  hero: Hero;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.checkHeroInfo();
  }

  checkHeroInfo(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.searchService.getById(params.id);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((hero) => {
        this.hero = hero;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
