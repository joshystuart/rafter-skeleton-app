import { ENTITY_TYPES } from './UserConstants';
import Transformer from '../common/mappers/Transformer';
import UserModelToObjectTransformer from './UserModelToObjectTransformer';
import ResponseDtoProvider from '../common/response/ResponseDtoProvider';
import UsersCollectionResponseDto from './UsersCollectionResponseDto';
import ResponseDto from '../common/response/ResponseDto';

export default class UsersCollectionResponseDtoToResponseDtoTransformer
  implements Transformer<UsersCollectionResponseDto, ResponseDto> {
  private readonly userModelToObjectTransformer: UserModelToObjectTransformer;
  private readonly responseDtoProvider: ResponseDtoProvider;

  constructor(userModelToObjectTransformer: UserModelToObjectTransformer, responseDtoProvider: ResponseDtoProvider) {
    this.userModelToObjectTransformer = userModelToObjectTransformer;
    this.responseDtoProvider = responseDtoProvider;
  }

  public convert(source: UsersCollectionResponseDto): ResponseDto {
    const users = source.getUsers();
    const offset = source.getOffset();
    const limit = source.getLimit();
    const total = source.getTotal();

    // map users to a user object
    const userObjects = this.userModelToObjectTransformer.convert(users);

    // map to a response dto
    return this.responseDtoProvider.createInstance(userObjects, ENTITY_TYPES.USER, offset, limit, total);
  }
}
