import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './pages/home.component';
import { MapComponent }  from './pages/map.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':ip', component: MapComponent }
];

@NgModule({
  imports: [ 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDDEe80_G9RuZDjH4_AKhvFx_NTjBrkwuU'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    MapComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
