import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GeoIpService } from '../services/geo-ip.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'map',
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
  template: `
    <sebm-google-map [latitude]="latitude" [longitude]="longitude" [zoom]="zoom">
      <sebm-google-map-marker [latitude]="latitude" [longitude]="longitude"></sebm-google-map-marker>
    </sebm-google-map>
  `,
  providers: [ GeoIpService ]
})
export class MapComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  private zoom: number = 8;

  constructor(
    private app: AppComponent,
    private geoIp: GeoIpService
  ) {}

  ngOnInit() {
    this.app.ipChanged.subscribe((ip: string) => {
      this.geoIp.getData(ip).then(data => {
        this.latitude = data.latitude;
        this.longitude = data.longitude;
      });
    });
  }
}
