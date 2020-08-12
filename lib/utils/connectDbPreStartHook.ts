/**
 * This pre start hook will ensure the db is connected
 *
 * @param {MongooseDbDao} dbDao
 * @param {Logger} logger
 * @return {Function}
 */
import { DatabaseDao } from './DatabaseDao';
import { ILogger } from '@rafterjs/logger-plugin';

export default (dbDao: DatabaseDao, logger: ILogger) => {
  return async () => {
    logger.info(`   Connecting to the database`);
    return dbDao.connect();
  };
};
