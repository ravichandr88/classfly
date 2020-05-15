import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactuspopupComponent } from './contactuspopup.component';

describe('ContactuspopupComponent', () => {
  let component: ContactuspopupComponent;
  let fixture: ComponentFixture<ContactuspopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactuspopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactuspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
