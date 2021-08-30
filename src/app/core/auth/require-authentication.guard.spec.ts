import { TestBed } from '@angular/core/testing';

import { RequiresAuthenticationGuard } from './auth.guard';

describe('RequireAuthenticationGuard', () => {
  let guard: RequiresAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RequiresAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
