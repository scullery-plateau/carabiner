import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCanvasComponent } from './tile-canvas.component';

describe('TileCanvasComponent', () => {
  let component: TileCanvasComponent;
  let fixture: ComponentFixture<TileCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
