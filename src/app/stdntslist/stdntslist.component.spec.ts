import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdntslistComponent } from './stdntslist.component';

describe('StdntslistComponent', () => {
  let component: StdntslistComponent;
  let fixture: ComponentFixture<StdntslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdntslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdntslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
