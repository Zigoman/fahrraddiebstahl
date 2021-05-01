import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { IGeometry } from '../interfaces/incidents';

@Injectable({
  providedIn: 'root'
})
export class MapBoxService {
  public map: mapboxgl.Map | undefined;
  public draw: any;

  constructor() {}

  public initMap(element: string, location: IGeometry | null): void {
    const map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: element,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: location?.coordinates,
      zoom: 15
    });
    if (location) {
      new mapboxgl.Marker().setLngLat(location?.coordinates).addTo(map);
    }
  }
}
