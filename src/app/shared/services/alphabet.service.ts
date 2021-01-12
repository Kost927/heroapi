import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService {
  clickedLetter: string;

  pickLetter(event): void {
    if (event.target.textContent) {
      this.clickedLetter = event.target.textContent;
    }
  }
}
