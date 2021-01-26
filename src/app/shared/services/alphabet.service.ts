import { Injectable } from '@angular/core';

import { Hero } from './interfaces/interface';
import constants from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService {
  clickedLetter: string;
  baseUrl: string = constants.BASE_URL;
  heroes: Hero[];

  pickLetter({ target }): void {
    if (target.textContent) {
      this.clickedLetter = target.textContent;
    }
  }
}
