import { SORT_QUALIFIER } from '../json/JsonConstants';

export type Sort = {
  [key: string]: string;
};

export default class SortDto {
  private readonly key: string;
  private readonly order: string;

  constructor(key: string, order: string = SORT_QUALIFIER.ASCENDING) {
    this.key = key;
    this.order = order;
  }

  public getKey(): string {
    return this.key;
  }

  public getOrder(): string {
    return this.order;
  }
}
