import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import { routerFeatureKey } from '../index';

export const selectRouter = createFeatureSelector<RouterReducerState>(routerFeatureKey);

export const { selectCurrentRoute, selectRouteParams } = getSelectors(selectRouter);
