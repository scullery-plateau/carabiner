import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpritelyComponent } from './spritely.component';

describe('SpritelyComponent', () => {
  let component: SpritelyComponent;
  let fixture: ComponentFixture<SpritelyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpritelyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpritelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
