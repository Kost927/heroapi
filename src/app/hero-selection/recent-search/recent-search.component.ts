import { Component } from '@angular/core';

import { SearchService } from './../../shared/services/search.service';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss'],
})
export class RecentSearchComponent {
  resentQuery: string;

  constructor(public searchService: SearchService) {}

  recentQuerySearch({ target }) {
    this.resentQuery = target.textContent.trim();

    this.searchService.searchEntries(this.resentQuery).subscribe();
  }
}
