import ParamsDto, { Params } from '../ParamsDto';
import Transformer from '../../mappers/Transformer';

class ParamsObjectToParamsDtoTransformer implements Transformer<Params, ParamsDto> {
  public convert(params: Params): ParamsDto {
    return new ParamsDto(params.id);
  }
}

export default ParamsObjectToParamsDtoTransformer;
