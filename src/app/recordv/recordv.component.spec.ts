import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordvComponent } from './recordv.component';

describe('RecordvComponent', () => {
  let component: RecordvComponent;
  let fixture: ComponentFixture<RecordvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
