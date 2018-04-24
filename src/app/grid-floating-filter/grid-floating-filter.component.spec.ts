import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFloatingFilterComponent } from './grid-floating-filter.component';

describe('GridFloatingFilterComponent', () => {
  let component: GridFloatingFilterComponent;
  let fixture: ComponentFixture<GridFloatingFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFloatingFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFloatingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
