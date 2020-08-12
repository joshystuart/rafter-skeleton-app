import get from 'lodash.get';
import { FILTER, PAGE_LIMIT, PAGE_OFFSET, SORT } from '../json/JsonConstants';
import GetRequestDto from './GetRequestDto';
import FilterObjectToFilterDtoTransformer from './mappers/FilterObjectToFilterDtoTransformer';
import SortStringToSortDtoTransformer from './mappers/SortStringToSortDtoTransformer';
import ParamsObjectToParamsDtoTransformer from './mappers/ParamsObjectToParamsDtoTransformer';
import { Request } from 'rafter';

export default class GetRequestDtoProvider {
  private filterObjectToFilterDtoTransformer: FilterObjectToFilterDtoTransformer;
  private sortStringToSortDtoTransformer: SortStringToSortDtoTransformer;
  private paramsObjectToParamsDtoTransformer: ParamsObjectToParamsDtoTransformer;

  constructor(
    filterObjectToFilterDtoTransformer: FilterObjectToFilterDtoTransformer,
    sortStringToSortDtoTransformer: SortStringToSortDtoTransformer,
    paramsObjectToParamsDtoTransformer: ParamsObjectToParamsDtoTransformer,
  ) {
    this.filterObjectToFilterDtoTransformer = filterObjectToFilterDtoTransformer;
    this.sortStringToSortDtoTransformer = sortStringToSortDtoTransformer;
    this.paramsObjectToParamsDtoTransformer = paramsObjectToParamsDtoTransformer;
  }

  public createInstance(request: Request): GetRequestDto {
    /**
     * @type {object} body
     * @type {object} params
     * @type {object} query
     */
    const { params = {}, query = {} } = request;

    // http://expressjs.com/en/4x/api.html#req.query
    const filters = get(query, FILTER);
    const limit = get(query, PAGE_LIMIT);
    const offset = get(query, PAGE_OFFSET);
    const sortBy = get(query, SORT);

    return new GetRequestDto(
      this.filterObjectToFilterDtoTransformer.convert(filters),
      this.paramsObjectToParamsDtoTransformer.convert(params),
      offset,
      limit,
      this.sortStringToSortDtoTransformer.convert(sortBy),
    );
  }
}
