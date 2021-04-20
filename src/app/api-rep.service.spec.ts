import { TestBed } from '@angular/core/testing';

import { ApiRepService } from './api-rep.service';

describe('ApiRepService', () => {
  let service: ApiRepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
