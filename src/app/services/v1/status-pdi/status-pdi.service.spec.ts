import { TestBed } from '@angular/core/testing';

import { StatusPdiService } from './status-pdi.service';

describe('StatusPdiService', () => {
  let service: StatusPdiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusPdiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
