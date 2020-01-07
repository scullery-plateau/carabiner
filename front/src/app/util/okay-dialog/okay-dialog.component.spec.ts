import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkayDialogComponent } from './okay-dialog.component';

describe('OkayDialogComponent', () => {
  let component: OkayDialogComponent;
  let fixture: ComponentFixture<OkayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
