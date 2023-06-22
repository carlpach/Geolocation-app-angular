import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocEditComponent } from './geoloc-edit.component';

describe('GeolocEditComponent', () => {
  let component: GeolocEditComponent;
  let fixture: ComponentFixture<GeolocEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeolocEditComponent]
    });
    fixture = TestBed.createComponent(GeolocEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
