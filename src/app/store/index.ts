import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromIncidents from './reducers/incidents.reducer';

export interface AppState {
  [fromIncidents.incidentsFeatureKey]: fromIncidents.IncidentsState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromIncidents.incidentsFeatureKey]: fromIncidents.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
