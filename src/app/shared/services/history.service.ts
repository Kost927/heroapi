import { Injectable } from '@angular/core';

import { History } from './interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  fightHistory: History[] = [];

  addToFightHistory(result: History): void {
    this.fightHistory = [result, ...this.fightHistory];
  }
}
