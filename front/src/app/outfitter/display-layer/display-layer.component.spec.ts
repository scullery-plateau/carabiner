import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLayerComponent } from './display-layer.component';

describe('DisplayLayerComponent', () => {
  let component: DisplayLayerComponent;
  let fixture: ComponentFixture<DisplayLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
