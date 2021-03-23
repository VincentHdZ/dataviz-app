import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChartListComponent } from './chart-list/chart-list.component';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'charts', component: ChartListComponent },
  { path: 'charts/:id', component: ChartDetailComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
