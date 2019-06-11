import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobblestoneMapComponent } from './cobblestone-map.component';

describe('CobblestoneMapComponent', () => {
  let component: CobblestoneMapComponent;
  let fixture: ComponentFixture<CobblestoneMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobblestoneMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobblestoneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
