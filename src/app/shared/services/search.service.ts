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
          this.heroes = heroes.results;
          console.log('heroes', this.heroes);
        })
      );
    }
  }

  public setRecentSearches(query: string): void {
    if (sessionStorage.getItem('resentSearches')) {
      let allRecentSearches = [
        ...JSON.parse(sessionStorage.getItem('resentSearches')),
      ];

      allRecentSearches = [...allRecentSearches, query];
      sessionStorage.setItem(
        'resentSearches',
        JSON.stringify([...new Set(allRecentSearches)])
      );
    } else {
      sessionStorage.setItem('resentSearches', JSON.stringify([query]));
    }
  }

  public getRecentSearches(): void {
    if (sessionStorage.getItem('resentSearches')) {
      this.allRecentSearches = JSON.parse(
        sessionStorage.getItem('resentSearches')
      );
    }
  }

  public selectHero(id: string): void {
    if (localStorage.getItem('selectedHero')) {
      let allSelectedHeroes = [
        ...JSON.parse(localStorage.getItem('selectedHero')),
      ];

      allSelectedHeroes = [...allSelectedHeroes, id];
      localStorage.setItem(
        'selectedHero',
        JSON.stringify([...new Set(allSelectedHeroes)])
      );
    } else {
      localStorage.setItem('selectedHero', JSON.stringify([id]));
    }
  }
}
