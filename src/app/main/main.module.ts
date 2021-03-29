import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { cardsReducer } from '../state/card.reducer';
import { cartReducer } from '../state/cart.reducer';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CartModalComponent } from './cart/cart-modal.component';

@NgModule({
  declarations: [
    CartModalComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTooltipModule,
    StoreModule.forRoot({ cart: cartReducer, collection: cardsReducer }),
    HttpClientModule,
    NoopAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [MainComponent]
})
export class MainModule { }
