import { TestBed } from '@angular/core/testing';

import { CobblestoneFileService } from './cobblestone-file.service';

describe('CobblestoneFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CobblestoneFileService = TestBed.get(CobblestoneFileService);
    expect(service).toBeTruthy();
  });
});
