import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

import { CHARTS } from '../data/mock-charts';

import { Chart } from '../_models/chart';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css'],
  animations: [
    trigger('cardAnimation',
      [
        transition('* => *',
          [
            query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':enter', stagger('300ms',
              [
                animate('.5s ease-in', keyframes(
                  [
                    style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
                    style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                  ]))
              ]), { optional: true }),
          ]),
      ])
  ]
})
export class ChartListComponent implements OnInit {
  charts: Chart[];

  constructor() { }

  ngOnInit(): void {
    this.charts = CHARTS;
  }
}
