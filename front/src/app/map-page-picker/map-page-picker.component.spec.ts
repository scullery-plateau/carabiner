import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPagePickerComponent } from './map-page-picker.component';

describe('MapPagePickerComponent', () => {
  let component: MapPagePickerComponent;
  let fixture: ComponentFixture<MapPagePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPagePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
