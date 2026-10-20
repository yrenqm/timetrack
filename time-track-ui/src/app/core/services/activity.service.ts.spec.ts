import { TestBed } from '@angular/core/testing';
import { ActivityServiceTs } from './activity.service.ts';

describe('ActivityServiceTs', () => {
  let service: ActivityServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
