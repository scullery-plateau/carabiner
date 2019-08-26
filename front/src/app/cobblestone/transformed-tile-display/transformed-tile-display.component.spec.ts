import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformedTileDisplayComponent } from './transformed-tile-display.component';

describe('TransformedTileDisplayComponent', () => {
  let component: TransformedTileDisplayComponent;
  let fixture: ComponentFixture<TransformedTileDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformedTileDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformedTileDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
