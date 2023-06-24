import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeoLocationsService } from '../../shared/services/geo-locations.service';
import { LocationsI } from "../../models/location.model";

@Component({
  selector: 'app-geoloc-edit',
  templateUrl: './geoloc-edit.component.html',
  styleUrls: ['./geoloc-edit.component.scss']
})
export class GeolocEditComponent {
  geolocForm!: FormGroup;
  submitted: boolean = false;
  editedGeoloc!: LocationsI;
  geoloc!: LocationsI;

  constructor(private formBuilder: FormBuilder, private geoLocApi: GeoLocationsService, private router: Router ) {
    
    this.geoloc = this.geoLocApi.getDetailGeoloc();
    console.log("this.geoloc ---------", this.geoloc);
    

  }


  ngOnInit(): void {
    this.geolocForm = this.formBuilder.group({
      image: [this.geoloc.image!, []],
      location_name: [this.geoloc.location_name, [Validators.required]],
      region: [this.geoloc.region, []],
      country: [this.geoloc.country, [Validators.required]],
      geolocation: ["", []],

    })


    this.geolocForm.valueChanges.subscribe((data) => {
      console.log("form values changes ----------", data);
      
      this.editedGeoloc = data;
    })
  }

  public sumbitGeoloc() {
      this.submitted = true;
      if (this.geolocForm.valid) {
        console.log("geoloc edit ------------", this.editedGeoloc);
        
        this.geoLocApi.putGeoloc(this.editedGeoloc).subscribe((data: any) => {
          console.log("returned data from put -----------", data);
          this.geolocForm.reset();
          this.submitted = false;
          this.router.navigate([`/${this.geoLocApi.geolocId}`]);
          
        })
      }
  }
}
