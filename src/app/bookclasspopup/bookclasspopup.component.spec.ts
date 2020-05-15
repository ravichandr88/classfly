import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookclasspopupComponent } from './bookclasspopup.component';

describe('BookclasspopupComponent', () => {
  let component: BookclasspopupComponent;
  let fixture: ComponentFixture<BookclasspopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookclasspopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookclasspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
