import { SearchService } from './../shared/services/search.service';
import { AlphabetService } from './../shared/services/alphabet.service';
import { Component, Output, EventEmitter } from '@angular/core';
import constants from '../shared/constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  alphabet: string[] = constants.ALPHABET;

  constructor(
    private alpha: AlphabetService,
    private searchService: SearchService
  ) {}

  pickLetter(): void {
    this.alpha.pickLetter(event);
  }

  public submitSearch(): void {
    const query: string = this.alpha.clickedLetter;

    this.searchService.searchEntries(query).subscribe();
  }
}
