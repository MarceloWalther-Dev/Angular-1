import { TestBed } from '@angular/core/testing';

import { SingUpService } from './singup.service';

describe('SingupService', () => {
  let service: SingUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
