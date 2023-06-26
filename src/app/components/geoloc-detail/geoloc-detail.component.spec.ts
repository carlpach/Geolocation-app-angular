import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocDetailComponent } from './geoloc-detail.component';

describe('GeolocDetailComponent', () => {
  let component: GeolocDetailComponent;
  let fixture: ComponentFixture<GeolocDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeolocDetailComponent]
    });
    fixture = TestBed.createComponent(GeolocDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
