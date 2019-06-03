import { TestBed } from '@angular/core/testing';

import { SpritelyFileService } from './spritely-file.service';

describe('SpritelyFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpritelyFileService = TestBed.get(SpritelyFileService);
    expect(service).toBeTruthy();
  });
});
