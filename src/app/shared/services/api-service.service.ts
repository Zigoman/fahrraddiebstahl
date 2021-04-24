import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIncidentsGeoObject, IIncidentsObject } from '../interfaces/incidents';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http$: HttpClient) {}

  public getIncidentsByPage(): Observable<IIncidentsObject> {
    return this.http$.get<IIncidentsObject>(`
    https://bikewise.org:443/api/v2/incidents?page=1&per_page=100&proximity=berlin&proximity_square=100`);
  }

  public getIncidentsGeoByPage(): Observable<IIncidentsGeoObject> {
    return this.http$.get<IIncidentsGeoObject>(
      `https://bikewise.org:443/api/v2/locations?page=1&per_page=100&proximity=berlin&proximity_square=100`
    );
  }
}
