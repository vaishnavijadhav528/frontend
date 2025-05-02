import { TestBed } from '@angular/core/testing';

import { ViewpatientService } from './viewpatient.service';

describe('ViewpatientService', () => {
  let service: ViewpatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewpatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
