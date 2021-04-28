import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromIncidents from '../reducers/incidents.reducer';
import { IncidentsState } from '../reducers/incidents.reducer';

export const selectIncidentsState = createFeatureSelector<fromIncidents.IncidentsState>(
  fromIncidents.incidentsFeatureKey
);

export const selectAllIncidents = createSelector(selectIncidentsState, fromIncidents.selectAllIncidents);

export const selectIncidentById = createSelector(
  selectIncidentsState,
  (selectedIncident: IncidentsState) => selectedIncident.entities
);

// export const selectIncidentsById = createSelector(selectIncidentsState, fromIncidents.getSelectedGeoId);
