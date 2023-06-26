import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeoLocationsService } from '../../shared/services/geo-locations.service';
import { LocationsI } from "../../models/location.model";
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-geoloc-detail',
  templateUrl: './geoloc-detail.component.html',
  styleUrls: ['./geoloc-detail.component.scss']
})
export class GeolocDetailComponent {
  public id!: number;
  public location!: LocationsI;
  public placeholderImg!: string;

  constructor(private geoLocApi: GeoLocationsService, private activatedRoute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar, public dialog: MatDialog ) {}

  ngOnInit(): void {

    this.placeholderImg = this.geoLocApi.placeholderImg;

    // 1st, get the id from the route
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    })

    // 2nd, get location data with method GET by id
    this.geoLocApi.getLocationsByID(this.id).subscribe((data: any) => {
      this.location = data;
      console.log("get data by id ---------", data);     
    })
  }

  editLocation() {
    this.geoLocApi.setLocation(this.location, this.id);
    this.router.navigate(["edit"]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
      this.deleteLocation();
    });
  }

  deleteLocation() {
    this.geoLocApi.setLocation(this.location, this.id);
    this.geoLocApi.deleteGeoloc().subscribe(() => {
        this._snackBar.open("Location deleted", "Close", {
          duration: 2000
        })
        setTimeout(()=>{         
          this.router.navigate(["/"]);
        }, 1500)
        
    })
  }


}
