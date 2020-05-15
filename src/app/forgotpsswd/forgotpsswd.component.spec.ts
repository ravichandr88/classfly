import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpsswdComponent } from './forgotpsswd.component';

describe('ForgotpsswdComponent', () => {
  let component: ForgotpsswdComponent;
  let fixture: ComponentFixture<ForgotpsswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpsswdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpsswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
