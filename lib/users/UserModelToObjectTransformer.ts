import Transformer from '../common/mappers/Transformer';
import { IUserModel, IUser } from './UserSchema';
import { FIELDS } from './UserConstants';

export default class UserModelToObjectTransformer implements Transformer<IUserModel | IUserModel[], IUser | IUser[]> {
  public convert(source: IUserModel | IUserModel[]): IUser | IUser[] {
    if (source instanceof Array) {
      return this.convertArray(source);
    }

    return this.convertSingle(source);
  }

  private convertSingle(source: IUserModel): IUser {
    return {
      [FIELDS.ID]: source.getId(),
      [FIELDS.FIRST_NAME]: source.getFirstName(),
      [FIELDS.LAST_NAME]: source.getLastName(),
      [FIELDS.EMAIL]: source.getEmail(),
    } as IUser;
  }

  private convertArray(source: IUserModel[]): IUser[] {
    const response = [];

    for (const model of source) {
      response.push(this.convertSingle(model));
    }

    return response;
  }
}
