import { Injectable } from '@angular/core';
import * as fromIncidentsActions from '../actions/incidents.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../shared/services/api-service.service';
import { forkJoin } from 'rxjs';

@Injectable()
export class IncidentsEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getIncidents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromIncidentsActions.getIncidents),
      mergeMap(() => {
        return forkJoin({
          info: this.apiService.getIncidentsByPage().pipe(map(incidentsInfo => incidentsInfo.incidents)),
          geo: this.apiService.getIncidentsGeoByPage().pipe(map(incidentsGeo => incidentsGeo.features))
        }).pipe(
          map(incidents => {
            return fromIncidentsActions.getIncidentsSuccess({
              incidents: incidents.info.map(incident => {
                const incidentGeo = incidents.geo.find(geo => geo.properties.id === incident.id);
                incident.geo = incidentGeo?.geometry ? incidentGeo.geometry : null;
                return incident;
              })
            });
          })
        );
      })
    )
  );
}
