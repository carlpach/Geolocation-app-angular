import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationsI } from "../../models/location.model";

@Injectable({
  providedIn: 'root'
})
export class GeoLocationsService {
  base_url: string = "http://localhost:3000/locations"
  locations!: LocationsI;

  constructor(private http: HttpClient) { 
    
  }

  public getLocations() {
    return this.http.get(this.base_url) 
  }   

  getLocationsByID(id: number){
    return this.http.get(`http://localhost:3000/locations/${id}`);
  }

  postGeoloc(geoloc: LocationsI) {
    return this.http.post(this.base_url, geoloc);
  }

}
