import { TestBed } from '@angular/core/testing';

import { PdcOrdersService } from './pdc-orders.service';

describe('PdcOrdersService', () => {
  let service: PdcOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdcOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
