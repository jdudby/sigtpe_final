import { TestBed } from '@angular/core/testing';

import { Loginservice } from './Loginservice.service';

describe('Loginservice', () => {
  let service: Loginservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loginservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
