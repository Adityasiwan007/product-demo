import { TestBed } from '@angular/core/testing';

import { UpcomingCardService } from './upcoming-card.service';

describe('UpcomingCardService', () => {
  let service: UpcomingCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
