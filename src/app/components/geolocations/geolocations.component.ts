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
  filteredLocationList: LocationsI[] = [];
  isList: boolean = false;
  
  constructor(private api: GeoLocationsService) {
    
  }

  ngOnInit(): void {

    this.placeholderImg! = this.api.placeholderImg;

    this.api.getLocations().subscribe((data: any) => {
      console.log(data);
      this.locationList = data;
      
    });

  }

  // filter locations by list
  onChange(event: any) {
    console.log(event.target.value);
    
    this.filteredLocationList = this.locationList.filter((item) => {
      return item.location_name.includes(event.key);
    })
    console.log(this.filteredLocationList);
    
  }

  onClickList() {
    this.isList = !this.isList;
    console.log(this.isList);
  }
}
