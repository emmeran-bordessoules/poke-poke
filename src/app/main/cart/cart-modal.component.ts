import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Card } from 'src/app/models/card';
import { map } from 'rxjs/operators';
import { addCard, removeCard } from 'src/app/state/card.actions';
import { selectCart } from 'src/app/state/cart.selector';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {
  cart$ = this.store.pipe(select(selectCart));
  totalPrice: number = 0;

  constructor(
    private store: Store
  ) {}

  public ngOnInit() {
    this.countTotalPrice();
  }

  public countTotalPrice() {
    this.totalPrice = 0;
    this.cart$.subscribe(
      element => element.forEach(e => this.totalPrice += e.card.price * e.quantity)
    );
  }

  public addCard(card: Card) {
    this.store.dispatch(addCard(card));
    this.countTotalPrice();
  }

  public removeCard(cardId: string) {
    this.store.dispatch(removeCard({cardId}));
    this.countTotalPrice();
  }
}
