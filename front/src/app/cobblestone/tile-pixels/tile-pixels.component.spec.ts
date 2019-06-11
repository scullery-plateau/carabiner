import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilePixelsComponent } from './tile-pixels.component';

describe('TilePixelsComponent', () => {
  let component: TilePixelsComponent;
  let fixture: ComponentFixture<TilePixelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilePixelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilePixelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
