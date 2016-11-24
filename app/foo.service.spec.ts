import { TestBed } from '@angular/core/testing';

import { Foo } from './foo.service';

describe('Foo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ Foo ]
    });
  });

  it('works', () => {
    expect(1+1).toBe(2);
  });
});