import { TestBed } from '@angular/core/testing';

import { ServeProductsService } from './serve-products.service';

describe('ServeProductsService', () => {
  let service: ServeProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
