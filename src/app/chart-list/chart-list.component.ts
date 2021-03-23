import { Component, OnInit } from '@angular/core';

import { CHARTS } from '../data/mock-charts';

import { Chart } from '../_models/chart';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css']
})
export class ChartListComponent implements OnInit {
  charts: Chart[];

  constructor() { }

  ngOnInit(): void {
    this.charts = CHARTS;
  }

}
