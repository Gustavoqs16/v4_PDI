import { TestBed } from '@angular/core/testing';

import { PdiTasksService } from './pdi-tasks.service';

describe('PdiTasksService', () => {
  let service: PdiTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdiTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
