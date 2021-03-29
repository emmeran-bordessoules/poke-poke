import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { Store, select } from '@ngrx/store';
import { CardsService } from '../services/cards.service';
import { selectCardCollection } from '../state/card.selector';
import { addCard, retrievedCardList } from '../state/card.actions';
import { PageEvent } from '@angular/material/paginator';
import { selectCart } from '../state/cart.selector';
import { noop } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CartModalComponent } from './cart/cart-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cards$ = this.store.pipe(select(selectCardCollection));
  cart$ = this.store.pipe(select(selectCart));
  filter: string;
  // MatPaginator Output
  pageEvent: PageEvent;

  rarities: string[];
  selectedRarity: string;
  types: string[];
  selectedType: string;

  constructor(
    private cardsService: CardsService,
    public dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit() {
    this.getCards();
    this.getFilters();
  }

  public filterChanged() {
    this.pageEvent ? this.pageEvent.pageIndex = 0 : noop();
    this.getCards();
  }

  public pageChanged(event) {
    this.pageEvent = event;
    this.getCards();
  }

  public addCard(card: Card) {
    this.store.dispatch(addCard(card));
  }

  public openCart() {
    this.dialog.open(CartModalComponent);
  }

  public getFilters() {
    this.cardsService.getRarities().subscribe(rarities => this.rarities = rarities.data);

    this.cardsService.getTypes().subscribe(types => this.types = types.data);
  }

  public getCards() {
    this.cardsService
      .getCards(this.filter, this.pageEvent, this.selectedRarity, this.selectedType)
      .subscribe((CardCollection) => this.store.dispatch(retrievedCardList(CardCollection)));
  }
}
