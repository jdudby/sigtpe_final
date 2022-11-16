import { TestBed } from '@angular/core/testing';

import { Logininterceptor } from './logininterceptor.interceptor';

describe('LogininterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Logininterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Logininterceptor = TestBed.inject(Logininterceptor);
    expect(interceptor).toBeTruthy();
  });
});
