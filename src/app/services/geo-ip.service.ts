import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface GeoIp {
  countryCode?: string;
  countryName?: string;
  ip: string;
  latitude: number;
  longitude: number;
}

@Injectable()
export class GeoIpService {
  private url = 'https://freegeoip.net/json/';

  constructor(
    private http: Http
  ) {}

  getData(ip: string): Promise<GeoIp> {
    return this.http.get(this.url + ip).toPromise()
      .then(response => {
        let data = response.json();
        return <GeoIp>{
          countryCode: data.country_code,
          countryName: data.country_name,
          ip: data.ip,
          latitude: data.latitude,
          longitude: data.longitude
        };
      })
      .catch(error => console.error('An error occurred', error));
  }
}