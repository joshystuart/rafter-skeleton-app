import MongooseDbDao from './MongooseDbDao';

export type DatabaseDao = MongooseDbDao;

export default (mongooseDbDao: MongooseDbDao) => {
  // the current DB is mongoose. If we need to change that
  // in the future, we only need to swap this dependency
  return mongooseDbDao;
};
