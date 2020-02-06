import { TestBed } from '@angular/core/testing';

import { PublishMinisService } from './publish-minis.service';

describe('PublishMinisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublishMinisService = TestBed.get(PublishMinisService);
    expect(service).toBeTruthy();
  });
});
