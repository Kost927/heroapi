import { Hero } from './interfaces/interface';
import { Injectable } from '@angular/core';

import constants from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService {
  clickedLetter: string;
  public baseUrl: string = constants.BASE_URL;
  heroes: Hero[];

  constructor() {}

  pickLetter(event): void {
    if (event.target.textContent) {
      this.clickedLetter = event.target.textContent;
    }
  }
}
