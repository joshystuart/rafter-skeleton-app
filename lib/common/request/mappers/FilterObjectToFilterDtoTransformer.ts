import Transformer from '../../mappers/Transformer';
import { Filter, FilterDto } from '../FilterDto';

class FilterObjectToFilterDtoTransformer implements Transformer<Filter, FilterDto[]> {
  public convert(queries: Filter): FilterDto[] {
    const filters: FilterDto[] = [];

    for (const [key, query] of Object.entries(queries)) {
      if (!(query instanceof String) && !isNaN((query as unknown) as number)) {
        const [operator, value] = Object.entries(query);

        filters.push(new FilterDto(key, (value as unknown) as string, (operator as unknown) as string));
      } else {
        filters.push(new FilterDto(key, (query as unknown) as string));
      }
    }

    return filters;
  }
}

export default FilterObjectToFilterDtoTransformer;
