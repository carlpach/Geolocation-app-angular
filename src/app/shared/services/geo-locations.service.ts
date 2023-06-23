import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationsI } from "../../models/location.model";

@Injectable({
  providedIn: 'root'
})
export class GeoLocationsService {
  base_url: string = "http://localhost:3000/locations"
  geolocId!: number;
  geoloc!: LocationsI;
  public placeholderImg: string =  "https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg";

  constructor(private http: HttpClient) { 
    
  }

  public getLocations() {
    return this.http.get(this.base_url) 
  }   

  getLocationsByID(id: number){
    return this.http.get(`${this.base_url}/${id}`);
  }

  setLocation(location: LocationsI, id: number){
    this.geoloc = location;
    this.geolocId = id;
  }

  getDetailGeoloc() {
    return this.geoloc;
  }

  postGeoloc(geoloc: LocationsI) {
    return this.http.post(this.base_url, geoloc);
  }

  putGeoloc(updatedGeoloc: LocationsI) {
    console.log("id --------->", this.geolocId);
    console.log("geoloc --------->", this.geoloc);
    
    return this.http.put(`${this.base_url}/${this.geolocId}`, updatedGeoloc);
  }

  deleteGeoloc() {

    return this.http.delete(`${this.base_url}/${this.geolocId}`);
  }


}
