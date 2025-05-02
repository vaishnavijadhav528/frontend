import { TestBed } from '@angular/core/testing';

import { StaffloginserviceService } from './staffloginservice.service';

describe('StaffloginserviceService', () => {
  let service: StaffloginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffloginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
