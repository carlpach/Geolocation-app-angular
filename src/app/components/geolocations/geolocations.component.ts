import { Component, OnInit  } from '@angular/core';
import { GeoLocationsService } from '../../shared/services/geo-locations.service';
import { LocationsI } from "../../models/location.model";

@Component({
  selector: 'app-geolocations',
  templateUrl: './geolocations.component.html',
  styleUrls: ['./geolocations.component.scss']
})
export class GeolocationsComponent {
  public locationList!: LocationsI[];
  public base_url: string = "http://localhost:3000/"
  public placeholderImg!: string;

  constructor(private api: GeoLocationsService) {
    
  }

  ngOnInit(): void {

    this.placeholderImg! = this.api.placeholderImg;

    this.api.getLocations().subscribe((data: any) => {
      console.log(data);
      this.locationList = data;
      
    });

  }
}
