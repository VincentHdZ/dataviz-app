import { Component, Input, OnInit } from '@angular/core';

import { Chart } from '../_models/chart';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css']
})
export class ChartCardComponent implements OnInit {
  @Input() chart: Chart;

  constructor() { }

  ngOnInit(): void {
  }
}
