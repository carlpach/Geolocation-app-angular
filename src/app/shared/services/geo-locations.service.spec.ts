import { TestBed } from '@angular/core/testing';

import { GeoLocationsService } from './geo-locations.service';

describe('GeoLocationsService', () => {
  let service: GeoLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
