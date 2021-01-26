import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { History } from '../../shared/services/interfaces/interface';
import { HistoryService } from './../../shared/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  fightHistory: History[];
  toggle: boolean = true;

  constructor(public historyService: HistoryService) {}

  ngOnInit(): void {
    this.fightHistoryMethod();
  }

  fightHistoryMethod(): void {
    this.fightHistory = JSON.parse(localStorage.getItem('history'));
  }

  sorting(key: string): void {
    this.toggle ? this.sortAscending(key) : this.sortDescending(key);
  }

  sortAscending(key: string): void {
    this.fightHistory = this.fightHistory.sort((a, b) => {
      if (a[key] > b[key]) return 1;
      if (a[key] < b[key]) return -1;
      return 0;
    });
    this.toggle = false;
  }

  sortDescending(key: string): void {
    this.fightHistory = this.fightHistory.sort((a, b) => {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
      return 0;
    });
    this.toggle = true;
  }
}
