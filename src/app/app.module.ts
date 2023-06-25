import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { GeolocationsComponent } from './components/geolocations/geolocations.component';
import { GeolocDetailComponent } from './components/geoloc-detail/geoloc-detail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GeolocEditComponent } from './components/geoloc-edit/geoloc-edit.component';
import { GeolocNewComponent } from './components/geoloc-new/geoloc-new.component';
import { FooterComponent } from './shared/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

import { GoogleMapsModule } from '@angular/google-maps';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeolocationsComponent,
    GeolocDetailComponent,
    NavbarComponent,
    GeolocEditComponent,
    GeolocNewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
