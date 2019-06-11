import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalettesAndTilesComponent } from './palettes-and-tiles.component';

describe('PalettesAndTilesComponent', () => {
  let component: PalettesAndTilesComponent;
  let fixture: ComponentFixture<PalettesAndTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalettesAndTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalettesAndTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
