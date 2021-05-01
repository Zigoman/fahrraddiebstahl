import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIncidentsGeoObject, IIncidentsObject } from '../interfaces/incidents';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public readonly proximity: number;
  public readonly location: string;
  public readonly perPage: number;
  public currentPage: number;
  public haveNextPage: boolean;

  constructor(private http$: HttpClient) {
    this.proximity = 100;
    this.location = 'berlin';
    this.perPage = 100;
    this.currentPage = 1;
    this.haveNextPage = false;
  }

  public getIncidentsByPage(): Observable<IIncidentsObject> {
    return this.http$.get<IIncidentsObject>(`
    ${environment.bikewiseURL}/incidents?page=${this.currentPage}&per_page=${this.perPage}&proximity=${this.location}&proximity_square=${this.proximity}`);
  }

  public getIncidentsGeoByPage(): Observable<IIncidentsGeoObject> {
    return this.http$.get<IIncidentsGeoObject>(
      `${environment.bikewiseURL}/locations?page=${this.currentPage}&per_page=${this.perPage}&proximity=${this.location}&proximity_square=${this.proximity}`
    );
  }
}
