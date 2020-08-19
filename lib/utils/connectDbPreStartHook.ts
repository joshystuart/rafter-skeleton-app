import { DatabaseDao } from './DatabaseDao';
import { ILogger } from '@rafterjs/logger-plugin';

export default (dbDao: DatabaseDao, logger: ILogger) => {
  return async (): Promise<void> => {
    logger.info(`   Connecting to the database`);
    await dbDao.connect();
    logger.info(`   Connected to the database`);
  };
};
