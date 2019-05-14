import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastermoldComponent } from './mastermold.component';

describe('MastermoldComponent', () => {
  let component: MastermoldComponent;
  let fixture: ComponentFixture<MastermoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastermoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
