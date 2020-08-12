import winston from 'winston';

export default (level = 'info') => {
  const winstonConsole = new winston.transports.Console({
    level: level,
  });

  return new winston.Logger({
    transports: [winstonConsole],
  });
};
