import { LIMIT, OFFSET, SORT } from './RequestConstants';
import FilterDto from './FilterDto';
import SortDto from './SortDto';
import ParamsDto from './ParamsDto';

export default class GetRequestDto {
  private readonly filters: FilterDto[];
  private readonly params?: ParamsDto;
  private readonly offset: number;
  private readonly limit: number;
  private readonly sortBy: SortDto[];

  constructor(
    filters: FilterDto[],
    params?: ParamsDto,
    offset = OFFSET,
    limit = LIMIT,
    sortBy: SortDto[] = [new SortDto(SORT)],
  ) {
    this.filters = filters;
    this.params = params;
    this.offset = offset;
    this.limit = limit;
    this.sortBy = sortBy;
  }

  public getFilters(): FilterDto[] {
    return this.filters;
  }

  public getParams(): ParamsDto | undefined {
    return this.params;
  }

  public getLimit(): number {
    return this.limit;
  }

  public getOffset(): number {
    return this.offset;
  }

  public getSortBy(): SortDto[] {
    return this.sortBy;
  }
}
