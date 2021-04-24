import { createReducer, on } from '@ngrx/store';

import * as incidentsActions from '../actions/incidents.actions';
import { IIncident } from '../../shared/interfaces/incidents';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const incidentsFeatureKey = 'incidents';

export interface IncidentsState extends EntityState<IIncident> {}

export const adapter: EntityAdapter<IIncident> = createEntityAdapter<IIncident>();

export const initialState: IncidentsState = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(incidentsActions.getIncidentsSuccess, (state, actions) => adapter.setAll(actions.incidents, state))
);

const { selectAll } = adapter.getSelectors();

export const selectAllIncidents = selectAll;
