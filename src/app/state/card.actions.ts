import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card';
import { CardCollection } from '../models/card-collection';

export const addCard = createAction(
  '[Cart] Add Card',
  props<Card>()
);

export const removeCard = createAction(
  '[Cart] Remove Card',
  props<{ cardId: string }>()
);

export const retrievedCardList = createAction(
  '[Card List/API] Retrieve Cards Success',
  props<CardCollection>()
);
