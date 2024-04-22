import { TestBed } from '@angular/core/testing';

import { PdcService } from './pdc.service';

describe('PdcService', () => {
  let service: PdcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
