import { TestBed } from '@angular/core/testing';

import { ParametricsService } from './parametrics.service';

describe('ParametricsService', () => {
  let service: ParametricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
