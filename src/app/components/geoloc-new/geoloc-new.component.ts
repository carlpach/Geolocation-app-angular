import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeoLocationsService } from '../../shared/services/geo-locations.service';
import { LocationsI } from "../../models/location.model";

@Component({
  selector: 'app-geoloc-new',
  templateUrl: './geoloc-new.component.html',
  styleUrls: ['./geoloc-new.component.scss']
})
export class GeolocNewComponent {
  geolocForm!: FormGroup;
  submitted: boolean = false;
  geoloc!: LocationsI;

  constructor(private formBuilder: FormBuilder, private geoLocApi: GeoLocationsService, private router: Router ) {}


  ngOnInit(): void {
    this.geolocForm = this.formBuilder.group({
      location_name: ["", [Validators.required]],
      region: ["", []],
      country: ["", [Validators.required]],
      geolocation: ["", []],
      image: ["", []]

    })

    this.geolocForm.valueChanges.subscribe((data) => {
      console.log("form values changes ----------", data);
      
      this.geoloc = data;
    })
  }

  public addGeoLoc() {
      this.submitted = true;
      if (this.geolocForm.valid) {
        console.log("geoloc ------------", this.geoloc);
        
        this.geoLocApi.postGeoloc(this.geoloc).subscribe((data: any) => {
          console.log(data);
          this.geolocForm.reset();
          this.submitted = false;
          this.router.navigate(["/"]);
          
        })
      }
  }
}
