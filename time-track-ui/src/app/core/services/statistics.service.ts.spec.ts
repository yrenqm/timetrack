import { TestBed } from '@angular/core/testing';
import { StatisticsServiceTs } from './statistics.service.ts';

describe('StatisticsServiceTs', () => {
  let service: StatisticsServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticsServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
