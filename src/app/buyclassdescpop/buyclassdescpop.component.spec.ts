import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyclassdescpopComponent } from './buyclassdescpop.component';

describe('BuyclassdescpopComponent', () => {
  let component: BuyclassdescpopComponent;
  let fixture: ComponentFixture<BuyclassdescpopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyclassdescpopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyclassdescpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
