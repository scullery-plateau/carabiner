import { TestBed } from '@angular/core/testing';

import { TileTransformerService } from './tile-transformer.service';

describe('TileTransformerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TileTransformerService = TestBed.get(TileTransformerService);
    expect(service).toBeTruthy();
  });
});
