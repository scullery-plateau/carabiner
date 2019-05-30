import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelCanvasComponent } from './pixel-canvas.component';

describe('PixelCanvasComponent', () => {
  let component: PixelCanvasComponent;
  let fixture: ComponentFixture<PixelCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
