import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromIncidents from './reducers/incidents.reducer';
import { routerReducer, RouterState } from '@ngrx/router-store';

export const routerFeatureKey = 'router';

export interface AppState {
  [fromIncidents.incidentsFeatureKey]: fromIncidents.IncidentsState;
  [routerFeatureKey]: RouterState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromIncidents.incidentsFeatureKey]: fromIncidents.reducer,
  [routerFeatureKey]: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
