import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeoLocationsService } from '../../shared/services/geo-locations.service';
import { LocationsI } from "../../models/location.model";

@Component({
  selector: 'app-geoloc-detail',
  templateUrl: './geoloc-detail.component.html',
  styleUrls: ['./geoloc-detail.component.scss']
})
export class GeolocDetailComponent {
  public id!: number;
  public location!: LocationsI;

  constructor(private locationApi: GeoLocationsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    // 1st, get the id from the route
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    })

    // 2nd, get location data with method GET by id
    this.locationApi.getLocationsByID(this.id).subscribe((data: any) => {
      this.location = data;
      console.log("get data by id ---------", data);
      
    })

  }


}
