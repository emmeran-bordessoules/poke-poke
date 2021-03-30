import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { CardCollection } from '../models/card-collection';

export const selectCollection = createSelector(
  (state: AppState) => state.collection,
  (collection: CardCollection) => collection
);

export const selectCollectionState = createFeatureSelector<
  AppState,
  CardCollection
>('collection');

export const selectCardCollection = createSelector(
  selectCollectionState,
  (collection: CardCollection) => collection
);
