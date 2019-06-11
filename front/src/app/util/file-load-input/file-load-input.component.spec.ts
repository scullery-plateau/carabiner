import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileLoadInputComponent } from './file-load-input.component';

describe('FileLoadInputComponent', () => {
  let component: FileLoadInputComponent;
  let fixture: ComponentFixture<FileLoadInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileLoadInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileLoadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
