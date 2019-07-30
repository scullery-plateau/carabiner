import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformedTileDefComponent } from './transformed-tile-def.component';

describe('TransformedTileDefComponent', () => {
  let component: TransformedTileDefComponent;
  let fixture: ComponentFixture<TransformedTileDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformedTileDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformedTileDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
