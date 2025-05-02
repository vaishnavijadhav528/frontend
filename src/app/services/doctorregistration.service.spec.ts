import { TestBed } from '@angular/core/testing';

import { DoctorregistrationService } from './doctorregistration.service';

describe('DoctorregistrationService', () => {
  let service: DoctorregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
