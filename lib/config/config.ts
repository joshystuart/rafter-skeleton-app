export type ISkeletonConfig = {
  db: {
    connectionUrl: string;
  };
  logger?: {
    level?: string;
  };
  server: {
    port: number;
  };
};

export default (): ISkeletonConfig => ({
  db: {
    // default mongo connection string
    connectionUrl: 'mongodb://localhost:27017/rafter-example',
  },
  logger: {
    // default log level
    level: process.env.NODE_LOGGER_LEVEL || `info`,
  },
  server: {
    port: 4000,
  },
});
