import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformedTileRefComponent } from './transformed-tile-ref.component';

describe('TransformedTileRefComponent', () => {
  let component: TransformedTileRefComponent;
  let fixture: ComponentFixture<TransformedTileRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformedTileRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformedTileRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
