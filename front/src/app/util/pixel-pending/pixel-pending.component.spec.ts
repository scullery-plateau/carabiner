import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelPendingComponent } from './pixel-pending.component';

describe('PixelPendingComponent', () => {
  let component: PixelPendingComponent;
  let fixture: ComponentFixture<PixelPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
