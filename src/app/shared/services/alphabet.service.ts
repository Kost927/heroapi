import { tap } from 'rxjs/operators';
import { Hero } from './interfaces/interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';

import constants from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService {
  clickedLetter: string;
  public baseUrl: string = constants.BASE_URL;
  heroes: Hero[];

  constructor(private httpClient: HttpClient) {}

  pickLetter(event): void {
    if (event.target.textContent) {
      this.clickedLetter = event.target.textContent;
    }
  }

  public searchEntries(query: any): Observable<any> {
    if (query === '') {
      console.log('Not defined');
      return empty();
    } else {
      return this.httpClient.get(`${this.baseUrl}/search/${query}`).pipe(
        tap((heroes) => {
          this.heroes = heroes.results.filter((hero) =>
            hero.name.startsWith(query)
          );
          console.log('heroes', this.heroes);
        })
      );
    }
  }
}
