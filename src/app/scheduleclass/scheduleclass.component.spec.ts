import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleclassComponent } from './scheduleclass.component';

describe('ScheduleclassComponent', () => {
  let component: ScheduleclassComponent;
  let fixture: ComponentFixture<ScheduleclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
