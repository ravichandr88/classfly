import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorddocComponent } from './worddoc.component';

describe('WorddocComponent', () => {
  let component: WorddocComponent;
  let fixture: ComponentFixture<WorddocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorddocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorddocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
