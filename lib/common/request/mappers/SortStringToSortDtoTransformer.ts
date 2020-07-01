import TransformerInterface from "../../mappers/transformer-interface";
import SortDto from "../sort-dto";
import { SORT_QUALIFIER } from "../../json/json-constants";
import trimStart from "lodash.trimstart";
import isString from "lodash.isstring";

class SortStringToSortDtoTransformer extends TransformerInterface {
  /**
   * @param {object} sortBy
   * @return {SortDto[]}
   */
  convert(sortBy) {
    const sorts = [];

    if (isString(sortBy)) {
      for (const sort of sortBy.split(",")) {
        sorts.push(
          new SortDto(this._getSortKey(sort), this._getSortOrder(sort))
        );
      }
    }

    return sorts;
  }

  /**
   * @param {string} sort
   * @return {string}
   * @private
   */
  _getSortOrder(sort) {
    let order = SORT_QUALIFIER.ASCENDING;

    if (this._isDescending(sort)) {
      order = SORT_QUALIFIER.DESCENDING;
    }

    return order;
  }

  /**
   * @param {string} sort
   * @return {string}
   * @private
   */
  _getSortKey(sort) {
    let trimmedSort = sort;
    trimmedSort = trimStart(trimmedSort, SORT_QUALIFIER.ASCENDING);
    trimmedSort = trimStart(trimmedSort, SORT_QUALIFIER.DESCENDING);
    return trimmedSort;
  }

  /**
   * @param {string} sort
   * @return {boolean}
   * @private
   */
  _isDescending(sort) {
    return sort.indexOf(SORT_QUALIFIER.DESCENDING) === 0;
  }
}

export default SortStringToSortDtoTransformer;
