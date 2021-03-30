import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../models/card';
import { CardCollection } from '../models/card-collection';

@Injectable({ providedIn: 'root' })
export class CardsService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.pokemontcg.io/v2';
  pageSize = '25';

  getCards(filter: string, page: PageEvent, rarity: string, type: string): Observable<CardCollection> {
    const pageString = page ? '&page=' + (page.pageIndex + 1).toString() : '';
    let filterString = '';
    // Add the name, rarity or type to the URL
    filterString = filter ? '&q=name:\"*' + filter.trim() + '*\"' : filterString;
    filterString = rarity ? filterString + (filterString === '' ? '&q=' : ' ') + 'rarity:\"' + rarity  + '\"' : filterString;
    filterString = type ? filterString + (filterString === '' ? '&q=' : ' ') + 'types:\"' + type  + '\"' : filterString;
    return this.http
      .get<CardCollection>(this.baseUrl + '/cards?pageSize=' + this.pageSize + pageString + filterString)
      .pipe(
        map(cardCollection => {
          // Map the data received from the API to the Card model
          cardCollection.data = cardCollection.data.map(x => Card.FromApiToModel(x));
          return cardCollection;
        })
      );
  }

  getRarities(): Observable<{data: string[]}> {
    return this.http.get<{data: string[]}>(this.baseUrl + '/rarities');
  }

  getTypes(): Observable<{data: string[]}> {
    return this.http.get<{data: string[]}>(this.baseUrl + '/types');
  }
}
