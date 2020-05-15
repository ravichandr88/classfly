import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackpopupComponent } from './feedbackpopup.component';

describe('FeedbackpopupComponent', () => {
  let component: FeedbackpopupComponent;
  let fixture: ComponentFixture<FeedbackpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
