import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsSummaryComponent } from './reviews/reviews-summary/reviews-summary.component';
import { SharedModule } from '../shared/modules/shared.module';
import { ReviewTemplatesComponent } from './reviews/review-templates/review-templates.component';
import { ReviewQuestionsComponent } from './reviews/review-questions/review-questions.component';
import { ReviewOverviewComponent } from './reviews/review-overview/review-overview.component';
import { ReviewSettingsComponent } from './reviews/review-settings/review-settings.component';
import { GoalSettingDialogComponent } from './reviews/goal-setting-dialog/goal-setting-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    SharedModule
  ],
  declarations: [
    PerformanceComponent, 
    ReviewsComponent,
     ReviewsSummaryComponent,
     ReviewTemplatesComponent,
     ReviewQuestionsComponent,
     ReviewOverviewComponent,
     ReviewSettingsComponent,
     GoalSettingDialogComponent
  ]
})
export class PerformanceModule { }
