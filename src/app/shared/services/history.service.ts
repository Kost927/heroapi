import { Injectable } from '@angular/core';

import { History } from './interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  setHistoryToLocalStorage(history: History): void {
    if (localStorage.getItem('history')) {
      let allHistory = [...JSON.parse(localStorage.getItem('history'))];

      allHistory = [...allHistory, history];
      localStorage.setItem('history', JSON.stringify(allHistory));
    } else {
      localStorage.setItem('history', JSON.stringify([history]));
    }
  }
}
