import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersignupComponent } from './trainersignup.component';

describe('TrainersignupComponent', () => {
  let component: TrainersignupComponent;
  let fixture: ComponentFixture<TrainersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
