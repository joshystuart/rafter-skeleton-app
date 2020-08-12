import { SORT_QUALIFIER } from '../../json/JsonConstants';
import trimStart from 'lodash.trimstart';
import isString from 'lodash.isstring';
import SortDto, { Sort } from '../SortDto';
import Transformer from '../../mappers/Transformer';

class SortStringToSortDtoTransformer implements Transformer<Sort, SortDto[]> {
  public convert(sortBy: Sort): SortDto[] {
    const sorts = [];

    if (isString(sortBy)) {
      for (const sort of sortBy.split(',')) {
        sorts.push(new SortDto(this.getSortKey(sort), this.getSortOrder(sort)));
      }
    }

    return sorts;
  }

  private getSortOrder(sort: string): string {
    let order = SORT_QUALIFIER.ASCENDING;

    if (this.isDescending(sort)) {
      order = SORT_QUALIFIER.DESCENDING;
    }

    return order;
  }

  private getSortKey(sort: string): string {
    let trimmedSort = sort;
    trimmedSort = trimStart(trimmedSort, SORT_QUALIFIER.ASCENDING);
    trimmedSort = trimStart(trimmedSort, SORT_QUALIFIER.DESCENDING);
    return trimmedSort;
  }

  private isDescending(sort: string): boolean {
    return sort.indexOf(SORT_QUALIFIER.DESCENDING) === 0;
  }
}

export default SortStringToSortDtoTransformer;
