import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTemplatesComponent } from './review-templates.component';

describe('ReviewTemplatesComponent', () => {
  let component: ReviewTemplatesComponent;
  let fixture: ComponentFixture<ReviewTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
