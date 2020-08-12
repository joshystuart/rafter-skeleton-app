import Transformer from '../../mappers/Transformer';
import { SORT_QUALIFIER } from '../../json/JsonConstants';
import SortDto, { Sort } from '../SortDto';

class SortDtoToQueryObjectTransformer implements Transformer<SortDto[], Sort> {
  public convert(sorts: SortDto[] = []): Sort {
    const sortBy: Sort = {};

    for (const sort of sorts) {
      sortBy[sort.getKey()] =
        sort.getOrder() === SORT_QUALIFIER.ASCENDING ? SORT_QUALIFIER.ASCENDING : SORT_QUALIFIER.DESCENDING;
    }

    return sortBy;
  }
}

export default SortDtoToQueryObjectTransformer;
