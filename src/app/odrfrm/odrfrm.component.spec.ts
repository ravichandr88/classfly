import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdrfrmComponent } from './odrfrm.component';

describe('OdrfrmComponent', () => {
  let component: OdrfrmComponent;
  let fixture: ComponentFixture<OdrfrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdrfrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdrfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
