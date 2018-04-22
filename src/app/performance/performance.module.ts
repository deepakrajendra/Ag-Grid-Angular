import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsSummaryComponent } from './reviews/reviews-summary/reviews-summary.component';
import { SharedModule } from '../shared/modules/shared.module';
@NgModule({
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    SharedModule
  ],
  declarations: [
    PerformanceComponent, 
    ReviewsComponent,
     ReviewsSummaryComponent
  ]
})
export class PerformanceModule { }
