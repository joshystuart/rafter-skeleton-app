import Transformer from '../../mappers/Transformer';
import { Filter, FilterDto } from '../FilterDto';

export class FilterDtoToFilterObjectTransformer implements Transformer<FilterDto[], Filter> {
  public convert(filters: FilterDto[] = []): Filter {
    let queries: Filter = {};

    for (const filter of filters) {
      const query: Filter = {};

      if (filter.getOperator()) {
        query[filter.getKey()] = {
          [filter.getOperator() as string]: filter.getValue(),
        };
      } else {
        query[filter.getKey()] = filter.getValue();
      }

      queries = {
        ...queries,
        ...query,
      };
    }

    return queries;
  }
}

export default FilterDtoToFilterObjectTransformer;
