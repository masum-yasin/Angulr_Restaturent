import { TestBed } from '@angular/core/testing';

import { ProductPointService } from './product-point.service';

describe('ProductPointService', () => {
  let service: ProductPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
