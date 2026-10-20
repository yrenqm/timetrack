import { TestBed } from '@angular/core/testing';
import { TimeBlockServiceTs } from './time-block.service.ts';

describe('TimeBlockServiceTs', () => {
  let service: TimeBlockServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeBlockServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
