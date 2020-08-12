import rafter from 'rafter';
import winstonFactory from './lib/utils/Winston';

const run = async () => {
  try {
    const logger = winstonFactory(process.env.NODE_LOG_LEVEL || 'debug');
    const rafterServer = rafter({
      paths: [`${__dirname}/lib/**/`],
      logger: logger,
    });
    await rafterServer.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
