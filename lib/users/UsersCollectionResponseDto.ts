import AbstractCollectionResponseDto from '../common/response/AbstractCollectionResponseDto';

export default class UsersCollectionResponseDto extends AbstractCollectionResponseDto {
  constructor(users = [], offset = 0, limit = 0, total = 0) {
    super(offset, limit, total);
    this.users = users;
  }

  /**
   * @return {UserModel[]|UserModel}
   */
  getUsers() {
    return this.users;
  }

  /**
   * @param {UserModel[]|UserModel} users
   * @return {UsersCollectionResponseDto}
   */
  setUsers(users = []) {
    this.users = users;
    return this;
  }
}
