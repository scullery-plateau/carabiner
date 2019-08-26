import { TestBed } from '@angular/core/testing';

import { CharIndexService } from './char-index.service';

describe('CharIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharIndexService = TestBed.get(CharIndexService);
    expect(service).toBeTruthy();
  });
});
