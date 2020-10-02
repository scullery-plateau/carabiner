import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitterDisplayComponent } from './outfitter-display.component';

describe('OutfitterDisplayComponent', () => {
  let component: OutfitterDisplayComponent;
  let fixture: ComponentFixture<OutfitterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
