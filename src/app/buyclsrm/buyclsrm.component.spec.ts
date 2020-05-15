import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyclsrmComponent } from './buyclsrm.component';

describe('BuyclsrmComponent', () => {
  let component: BuyclsrmComponent;
  let fixture: ComponentFixture<BuyclsrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyclsrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyclsrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
