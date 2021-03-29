import { createReducer, on } from '@ngrx/store';

import { retrievedCardList } from './card.actions';
import { CardCollection } from '../models/card-collection';

export const initialState: CardCollection = new CardCollection();

export const cardsReducer = createReducer(
  initialState,
  on(retrievedCardList, (state, cardCollection) => cardCollection)
);
