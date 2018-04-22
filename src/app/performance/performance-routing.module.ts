import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// import { PerformanceModule } from './performance.module';
import { ReviewsComponent } from './reviews/reviews.component';

const performanceRoutes: Routes =[
  // {path : 'reviews' , component : ReviewsComponent }
  
  ];

@NgModule({
  imports: [
    RouterModule.forChild(performanceRoutes)
    // PerformanceModule
  ],
  exports: [ RouterModule ]
})
export class PerformanceRoutingModule { }

