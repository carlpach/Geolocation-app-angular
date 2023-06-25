import { Component, OnInit, ViewChild  } from '@angular/core';
import { GeoLocationsService } from '../../shared/services/geo-locations.service';
import { LocationsI } from "../../models/location.model";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-geolocations',
  templateUrl: './geolocations.component.html',
  styleUrls: ['./geolocations.component.scss']
})
export class GeolocationsComponent {
  public locationList: LocationsI[] = [];
  public placeholderImg!: string;
  filteredLocationList: LocationsI[] = [];
  isList: boolean = false;
  selectedType: string = "location_name";
  public mapBounds = new google.maps.LatLngBounds();
  @ViewChild(GoogleMap) map!: GoogleMap;

  mapOptions: google.maps.MapOptions = {
  };

  constructor(private api: GeoLocationsService) { }

  ngOnInit(): void {

    this.placeholderImg! = this.api.placeholderImg;

    this.api.getLocations().subscribe((data: any) => {
      console.log(data);

      // response all locations
      this.locationList = data;
      console.log(this.locationList);

      // zoom to existing markers
      let bounds = new google.maps.LatLngBounds();
      console.log(this.locationList!);
      for (let location of this.locationList) {
        let latLng = new google.maps.LatLng(location.position.lat, location.position.lng);
        bounds.extend(latLng);  
      }
      this.map.googleMap!.fitBounds(bounds);  
  
    });
  }

  public searchTypes: any = [
    {value: "location_name", viewValue: "Name"},
    {value: "country", viewValue: "Country"},
  ]

  onClickItem (location: LocationsI) {
    console.log(location);
    
    this.map.googleMap!.setCenter(location.position);
    this.map.googleMap!.setZoom(8);
  
  }

  onChange(event: any) {
    // Filter locations in the locations list
    console.log("event target search bar ------", event.target.value);
    console.log("event target search bar ------", event.target.value);

    this.filteredLocationList = this.locationList.filter((item) => {
      return item[this.selectedType].toLowerCase().includes(event.target.value.toLowerCase());
    })
    console.log(this.filteredLocationList);
    
  }

  onClickList() {
    this.isList = !this.isList;
    console.log(this.isList);
  }
}
