import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/modules/shared.module';
import { AppComponent } from './app.component';
import { ReviewService } from './review.service';
import { DateRendererComponent } from './date-renderer/date-renderer.component';
import { ActionsRendererComponent } from './actions-renderer/actions-renderer.component';


@NgModule({
  declarations: [
    AppComponent,
    DateRendererComponent,
    ActionsRendererComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
