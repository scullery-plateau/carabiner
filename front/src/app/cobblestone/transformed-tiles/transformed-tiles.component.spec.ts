import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformedTilesComponent } from './transformed-tiles.component';

describe('TransformedTilesComponent', () => {
  let component: TransformedTilesComponent;
  let fixture: ComponentFixture<TransformedTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformedTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformedTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
