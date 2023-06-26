import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationsComponent } from './geolocations.component';

describe('GeolocationsComponent', () => {
  let component: GeolocationsComponent;
  let fixture: ComponentFixture<GeolocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeolocationsComponent]
    });
    fixture = TestBed.createComponent(GeolocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
