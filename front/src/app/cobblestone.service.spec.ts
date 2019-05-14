import { TestBed } from '@angular/core/testing';

import { CobblestoneService } from './cobblestone.service';

describe('CobblestoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CobblestoneService = TestBed.get(CobblestoneService);
    expect(service).toBeTruthy();
  });
});
