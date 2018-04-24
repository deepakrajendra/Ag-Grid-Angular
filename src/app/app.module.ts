import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/modules/shared.module';
import { AppComponent } from './app.component';
import { ReviewService } from './review.service';
import { DateRendererComponent } from './date-renderer/date-renderer.component';
import { ActionsRendererComponent } from './actions-renderer/actions-renderer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { PerformanceModule } from './performance/performance.module';
import { GridFloatingFilterComponent } from './grid-floating-filter/grid-floating-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    DateRendererComponent,
    ActionsRendererComponent,
    HeaderComponent,
    SideNavComponent,
    GridFloatingFilterComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    PerformanceModule
  ],
  providers: [ReviewService],
  bootstrap: [AppComponent],
  entryComponents:[GridFloatingFilterComponent]
})
export class AppModule { }
