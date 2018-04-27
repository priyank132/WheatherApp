import { TestBed, inject } from '@angular/core/testing';

import { WheatherServiceService } from './wheather-service.service';

describe('WheatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WheatherServiceService]
    });
  });

  it('should be created', inject([WheatherServiceService], (service: WheatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
