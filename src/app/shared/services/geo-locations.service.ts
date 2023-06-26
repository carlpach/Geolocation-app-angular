import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationsI } from "../../models/location.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationsService {
  geolocId!: number;
  geoloc!: LocationsI;
  public placeholderImg: string =  "https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg";

  constructor(private http: HttpClient) { 
    
  }

  public getLocations() {
    return this.http.get(environment.base_url) 
  }   

  getLocationsByID(id: number){
    return this.http.get(`${environment.base_url}/${id}`);
  }

  setLocation(location: LocationsI, id: number){
    this.geoloc = location;
    this.geolocId = id;
  }

  getDetailGeoloc() {
    return this.geoloc;
  }

  postGeoloc(geoloc: LocationsI) {
    return this.http.post(environment.base_url, geoloc);
  }

  putGeoloc(updatedGeoloc: LocationsI) {
    console.log("id --------->", this.geolocId);
    console.log("geoloc --------->", this.geoloc);
    
    return this.http.put(`${environment.base_url}/${this.geolocId}`, updatedGeoloc);
  }

  deleteGeoloc() {

    return this.http.delete(`${environment.base_url}/${this.geolocId}`);
  }


}
