import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyclassComponent } from './dailyclass.component';

describe('DailyclassComponent', () => {
  let component: DailyclassComponent;
  let fixture: ComponentFixture<DailyclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
