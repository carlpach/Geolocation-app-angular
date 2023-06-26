import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GeolocDetailComponent } from './components/geoloc-detail/geoloc-detail.component';
import { GeolocEditComponent } from './components/geoloc-edit/geoloc-edit.component';
import { GeolocNewComponent } from './components/geoloc-new/geoloc-new.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path:'edit', component: GeolocEditComponent
  },
  {
    path:'new', component: GeolocNewComponent
  },
  {
    path:':id', component: GeolocDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
