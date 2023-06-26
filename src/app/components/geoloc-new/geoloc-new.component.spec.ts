import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocNewComponent } from './geoloc-new.component';

describe('GeolocNewComponent', () => {
  let component: GeolocNewComponent;
  let fixture: ComponentFixture<GeolocNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeolocNewComponent]
    });
    fixture = TestBed.createComponent(GeolocNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
