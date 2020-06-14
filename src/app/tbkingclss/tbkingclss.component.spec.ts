import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbkingclssComponent } from './tbkingclss.component';

describe('TbkingclssComponent', () => {
  let component: TbkingclssComponent;
  let fixture: ComponentFixture<TbkingclssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbkingclssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbkingclssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
