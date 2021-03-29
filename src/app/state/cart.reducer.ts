import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../models/cart-item';
import { addCard, removeCard } from './card.actions';

export const initialState: ReadonlyArray<CartItem> = [];

export const cartReducer = createReducer(
  initialState,
  on(removeCard, (state, { cardId }) => {
    const index = state.findIndex(x => x.card.id === cardId);
    // Index found and quantity greater than 1
    if (index > -1 && state[index].quantity > 1) {
      state = [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          quantity: state[index].quantity - 1,
          card: state[index].card
        }),
        ...state.slice(index + 1)
      ];
    // Index found and quantity equal to 1
    } else if (index > -1){
      state = state.filter(x => x.card.id !== cardId);
    }
    return state
  }),
  on(addCard, (state, card) => {
    const index = state.findIndex(x => x.card.id === card.id);
    // Card already existing in the cart
    if (index > -1) {
      state = [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          quantity: state[index].quantity + 1,
          card: state[index].card
        }),
        ...state.slice(index + 1)
      ];
    // Card not present in the cart
    } else {
      const item = new CartItem();
      item.quantity = 1;
      item.card = card;
      state = [...state, item];
    }
    return state
  })
);
