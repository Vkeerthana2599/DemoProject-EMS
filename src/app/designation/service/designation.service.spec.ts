import { TestBed } from '@angular/core/testing';

import { DesignationService } from './designation.service';

describe('DesignationServiceService', () => {
  let service: DesignationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
