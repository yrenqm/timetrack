import { TestBed } from '@angular/core/testing';
import { LifeAreaServiceTs } from './life-area.service.ts';

describe('LifeAreaServiceTs', () => {
  let service: LifeAreaServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeAreaServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
