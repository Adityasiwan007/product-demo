import { TestBed } from '@angular/core/testing';

import { LiveCardService } from './live-card.service';

describe('LiveCardService', () => {
  let service: LiveCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
