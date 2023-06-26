import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeoLocationsService } from '../../shared/services/geo-locations.service';
import { LocationsI } from "../../models/location.model";
import { GoogleMap } from '@angular/google-maps';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-geoloc-new',
  templateUrl: './geoloc-new.component.html',
  styleUrls: ['./geoloc-new.component.scss']
})

export class GeolocNewComponent {
  geolocForm!: FormGroup;
  submitted: boolean = false;
  geoloc!: LocationsI;
  autocomplete: any;
  @ViewChild(GoogleMap) map!: GoogleMap;
  newPlace!: any; // newPlace to be added

  constructor(private formBuilder: FormBuilder, private geoLocApi: GeoLocationsService, private router: Router, private _snackBar: MatSnackBar ) {}

  ngOnInit(): void {
    this.initAutocomplete();

  }

  private initAutocomplete() {
    // get html input element
    const input = document.getElementById("autocomplete") as HTMLInputElement;
    console.log(input);
    const options = {
      fields: ["address_components", "geometry", "icon", "name", "photos"],
      strictBounds: false,
      types: [],
    };
    
    // generate autocomplete g maps data in input html
    this.autocomplete = new google.maps.places.Autocomplete( input, options);

    // listener to the input to get the selected newPlace
    this.autocomplete.addListener("place_changed", () => {
      this.onPlaceChanged();
    });
  
    console.log(this.autocomplete);
    console.log(this.autocomplete.getPlace());
    
  }

  public onPlaceChanged() {
    // when newPlace is selected in input, center/zoom to newPlace
    this.newPlace = this.autocomplete.getPlace();
    console.log("newPlace --------", this.newPlace);
    this.map.googleMap!.setCenter(this.newPlace.geometry.location);
    this.map.googleMap!.setZoom(15);
    console.log(this.newPlace.geometry.location);
    this.geoloc = {   
          id: NaN,    
          image: this.newPlace.photos ? this.newPlace.photos[0].getUrl() : "",
          location_name: this.newPlace.name,
          region: this.newPlace.address_components[1].long_name,
          country: this.newPlace.address_components[this.newPlace.address_components.length - 1].long_name,
          position: this.newPlace.geometry.location
        }
    console.log("geoloc --------", this.geoloc);
    
    
  }

  public submitGeoLoc() {
      console.log("geoloc ------------", this.geoloc);
      this.geoLocApi.postGeoloc(this.geoloc).subscribe((data: any) => {
        console.log(data);
        this._snackBar.open("Location added", "Close", {
          duration: 2000
        })
        setTimeout(()=>{         
          this.router.navigate(["/"]);
        }, 1500)
        
      })
      
  }
}
