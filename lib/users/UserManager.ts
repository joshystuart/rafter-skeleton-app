import { UserModel } from "./UserSchema";
import MongooseDbDao from "../utils/MongooseDbDao";

export default class UserManager {
  private dbDao: MongooseDbDao;

  /**
   * @param {MongooseDbDao} dbDao
   */
  constructor(dbDao: MongooseDbDao) {
    this.dbDao = dbDao;
  }

  public async create(userModel: UserModel): Promise<UserModel> {
    return this.dbDao.create(userModel);
  }

  public async update(userModel: UserModel): Promise<UserModel> {
    return this.dbDao.create(userModel);
  }

  public async findAll(
    query: object,
    offset: number,
    limit: number,
    sortBy: object
  ): Promise<UserModel> {
    const option = {
      criteria: query,
      offset,
      limit,
      sort: sortBy,
    };

    return this.dbDao.findAll(UserModel, option);
  }
}
