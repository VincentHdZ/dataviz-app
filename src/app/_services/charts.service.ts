import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Chart } from '../_models/chart';

import { CHARTS } from '../data/mock-charts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private http: HttpClient) { }

  getChart(id: number): Chart {
    let chartSelected: Chart;
    chartSelected = CHARTS.find(c => c.id === id);
    this.http.get<any>(chartSelected.specUrl).pipe(
      map(response => {
        chartSelected.spec = response;
      })
    );
    return chartSelected;
  }

  getChartSpec(url: string){
    return this.http.get<any>(url);
  }
}
