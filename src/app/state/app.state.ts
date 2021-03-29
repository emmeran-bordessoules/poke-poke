import { CardCollection } from '../models/card-collection';
import { CartItem } from '../models/cart-item';

export interface AppState {
  cart: ReadonlyArray<CartItem>;
  collection: Readonly<CardCollection>;
}
