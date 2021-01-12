import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Hero } from './interfaces/interface';
import constants from '../constants';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  heroes: Hero[];
  allRecentSearches: string[] | null = null;

  constructor(private httpClient: HttpClient) {}

  public baseUrl: string = constants.BASE_URL;

  public searchResults: any;

  public searchEntries(query: any): Observable<any> {
    if (query === '') {
      console.log('Not defined');
      return empty();
    } else {
      return this.httpClient.get(`${this.baseUrl}/search/${query}`).pipe(
        tap((heroes) => {
          if (query.length > 1) {
            this.checkSearchByInput(heroes);
          } else {
            this.checkSearchByLetter(heroes, query);
          }
        })
      );
    }
  }

  private checkSearchByInput(heroes: any): void {
    this.heroes = heroes.results;
  }

  private checkSearchByLetter(heroes: any, query: string) {
    this.heroes = heroes.results.filter((hero) => hero.name.startsWith(query));
  }

  public setRecentSearches(query: string): void {
    if (sessionStorage.getItem('resentSearches')) {
      this.setRecentIfStorageNotEmpty(query);
    } else {
      this.setRecentIfStorageEmpty(query);
    }
  }

  private setRecentIfStorageNotEmpty(query: string): void {
    let allRecentSearches = [
      ...JSON.parse(sessionStorage.getItem('resentSearches')),
    ];
    allRecentSearches = [...allRecentSearches, query];
    sessionStorage.setItem(
      'resentSearches',
      JSON.stringify([...new Set(allRecentSearches)])
    );
  }

  private setRecentIfStorageEmpty(query: string): void {
    sessionStorage.setItem('resentSearches', JSON.stringify([query]));
  }

  public getRecentSearches(): void {
    if (sessionStorage.getItem('resentSearches')) {
      this.allRecentSearches = JSON.parse(
        sessionStorage.getItem('resentSearches')
      );
    }
  }

  public selectHero(hero: Hero): void {
    if (localStorage.getItem('selectedHero')) {
      let allSelectedHeroes = [
        ...JSON.parse(localStorage.getItem('selectedHero')),
      ];

      allSelectedHeroes = [...allSelectedHeroes, hero];
      localStorage.setItem('selectedHero', JSON.stringify(allSelectedHeroes));
    } else {
      localStorage.setItem('selectedHero', JSON.stringify([hero]));
    }
  }
}
