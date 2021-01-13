import { Component, OnInit } from '@angular/core';

import { PowerUpsService } from './../../shared/services/power-ups.service';

@Component({
  selector: 'app-power-ups',
  templateUrl: './power-ups.component.html',
  styleUrls: ['./power-ups.component.scss'],
})
export class PowerUpsComponent implements OnInit {
  constructor(public powerUpsService: PowerUpsService) {}

  ngOnInit(): void {
    this.powerUpsService.powerUpsSorting();
  }
}
