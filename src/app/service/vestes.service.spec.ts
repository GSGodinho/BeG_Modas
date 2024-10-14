import { TestBed } from '@angular/core/testing';

import { VestesService } from './vestes.service';

describe('VestesService', () => {
  let service: VestesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VestesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
