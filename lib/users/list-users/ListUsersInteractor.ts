import UsersCollectionResponseDto from '../UsersCollectionResponseDto';
import UserManager from '../UserManager';
import FilterDtoToFilterObjectTransformer from '../../common/request/mappers/FilterDtoToFilterObjectTransformer';
import SortDtoToQueryObjectTransformer from '../../common/request/mappers/SortDtoToQueryObjectTransformer';
import GetRequestDto from '../../common/request/GetRequestDto';

export default class ListUsersInteractor {
  private readonly userManager: UserManager;
  private readonly filterDtoToFilterObjectTransformer: FilterDtoToFilterObjectTransformer;
  private readonly sortDtoToQueryObjectTransformer: SortDtoToQueryObjectTransformer;

  constructor(
    userManager: UserManager,
    filterDtoToFilterObjectTransformer: FilterDtoToFilterObjectTransformer,
    sortDtoToQueryObjectTransformer: SortDtoToQueryObjectTransformer,
  ) {
    this.userManager = userManager;
    this.filterDtoToFilterObjectTransformer = filterDtoToFilterObjectTransformer;
    this.sortDtoToQueryObjectTransformer = sortDtoToQueryObjectTransformer;
  }

  public async listUsers(getRequestDto: GetRequestDto): Promise<UsersCollectionResponseDto> {
    const limit = getRequestDto.getLimit();
    const offset = getRequestDto.getOffset();
    const filters = getRequestDto.getFilters();
    const sort = getRequestDto.getSortBy();

    const users = await this.userManager.findAll(
      this.filterDtoToFilterObjectTransformer.convert(filters),
      offset,
      limit,
      this.sortDtoToQueryObjectTransformer.convert(sort),
    );

    const allUsers = await this.userManager.findAll(this.filterDtoToFilterObjectTransformer.convert(filters), 0, 0);

    return new UsersCollectionResponseDto(users, offset, limit, allUsers.length);
  }
}
