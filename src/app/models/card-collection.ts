import { Card } from './card';

export class CardCollection {
  public count: number;
  public data: Card[];
  public page: number;
  public pageSize: number;
  public totalCount: number;
}
