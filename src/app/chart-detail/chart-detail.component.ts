import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Chart } from '../_models/chart';

import { ChartService } from '../_services/charts.service';
import { trigger, transition, state, animate, style } from '@angular/animations';

declare var vega: any;

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.css']
})
export class ChartDetailComponent implements OnInit {
  chart: Chart;
  vegaView: any;

  constructor(private chartService: ChartService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getChart();
  }

  getChart() {
    this.chart = this.chartService.getChart(parseInt(this.route.snapshot.paramMap.get('id')));
    this.chartService.getChartSpec(this.chart.specUrl).subscribe(response => {
      this.chart.spec = response;
      this.getVegaView();
    },
      error => console.log(error));
  }

  getVegaView() {
    this.vegaView = new vega.View(vega.parse(this.chart.spec))
      .renderer('svg')
      .initialize('#vega-view')
      .width(800)
      .height(500)
      .hover();
    return this.vegaView.runAsync();
  }

  goBack(): void {
    this.router.navigate(['/charts']);
  }
}
