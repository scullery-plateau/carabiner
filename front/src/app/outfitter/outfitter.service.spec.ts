import { TestBed } from '@angular/core/testing';

import { OutfitterService } from './outfitter.service';

describe('OutfitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutfitterService = TestBed.get(OutfitterService);
    expect(service).toBeTruthy();
  });
});
