import { TestBed } from '@angular/core/testing';

import { ServiceExampleService } from './service-example.service';

describe('ServiceExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceExampleService = TestBed.get(ServiceExampleService);
    expect(service).toBeTruthy();
  });
});
