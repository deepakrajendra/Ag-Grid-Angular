import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingDialogComponent } from './goal-setting-dialog.component';

describe('GoalSettingDialogComponent', () => {
  let component: GoalSettingDialogComponent;
  let fixture: ComponentFixture<GoalSettingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalSettingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalSettingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
