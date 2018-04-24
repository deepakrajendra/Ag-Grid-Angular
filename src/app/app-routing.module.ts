import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerformanceModule } from './performance/performance.module';
import { PerformanceComponent } from './performance/performance.component';
import { ReviewsComponent } from './performance/reviews/reviews.component';
import { ReviewsSummaryComponent } from './performance/reviews/reviews-summary/reviews-summary.component';
import { ReviewTemplatesComponent } from './performance/reviews/review-templates/review-templates.component';
import { ReviewQuestionsComponent } from './performance/reviews/review-questions/review-questions.component';
import { ReviewOverviewComponent } from './performance/reviews/review-overview/review-overview.component';
import { ReviewSettingsComponent } from './performance/reviews/review-settings/review-settings.component';

const routes: Routes = [
  // {path : '', component: PerformanceComponent},
  {
    path: 'performance',
    // loadChildren: 'app/performance/performance.module#PerformanceModule'
    component: PerformanceComponent,
    children: [
      {
        path: 'reviews',
        component: ReviewsComponent,
        children: [
          { path: 'summary', component: ReviewsSummaryComponent },
          { path: 'templates', component: ReviewTemplatesComponent },
          { path: 'questions', component: ReviewQuestionsComponent },
          { path: 'overview', component: ReviewOverviewComponent },
          { path: 'settings', component: ReviewSettingsComponent}       ]
      },
      {
        path: '',
        redirectTo: 'performance/reviews/summary',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'performance/reviews/summary',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
