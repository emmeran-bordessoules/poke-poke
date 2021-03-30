import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { CartItem } from '../models/cart-item';

export const selectCart = createSelector(
  (state: AppState) => state.cart,
  (cart: CartItem[]) => cart
);
