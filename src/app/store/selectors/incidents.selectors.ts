import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromIncidents from '../reducers/incidents.reducer';
import { selectRouteParams } from './router.selectors';
import { adapter } from '../reducers/incidents.reducer';

export const selectIncidentsState = createFeatureSelector<fromIncidents.IncidentsState>(
  fromIncidents.incidentsFeatureKey
);

const { selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectIncidentEntities = createSelector(selectIncidentsState, selectEntities);

export const selectIncidents = createSelector(selectIncidentsState, selectAll);

export const selectIncident = createSelector(
  selectIncidentEntities,
  selectRouteParams,
  (incidents, { id }) => incidents[id]
);
