import { createAction, props } from '@ngrx/store';
import { IIncidents } from '../../shared/interfaces/incidents';

export const getIncidents = createAction('[Main Component] get incidents info');
export const getIncidentsSuccess = createAction(
  '[incidents Effect] load incidents info Success',
  props<{ incidents: IIncidents }>()
);
