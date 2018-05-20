import { TestBed, async, inject } from '@angular/core/testing';

import { AutenticationGuard } from './autentication.guard';

describe('AutenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticationGuard]
    });
  });

  it('should ...', inject([AutenticationGuard], (guard: AutenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
