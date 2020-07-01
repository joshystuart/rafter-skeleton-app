import { join } from "path";
import diAutoloaderFactory from "@rafterjs/di-autoloader";
import userFixtures from "./fixtures/users.json";
import UserModel from "./../lib/users/user-schema";

const run = async () => {
  try {
    const diAutoLoader = diAutoloaderFactory(console);
    await diAutoLoader.load([join(__dirname, "/../lib", "**/*.js")]);

    /**
     * @type {MongooseDbDao} dbDao
     */
    const dbDao = diAutoLoader.get("dbDao");
    /**
     * @type {UserManager} userManager
     */
    const userManager = diAutoLoader.get("userManager");
    /**
     * @type {Logger} logger
     */
    const logger = diAutoLoader.get("logger");

    logger.info(`   Connecting to a DB...`);
    await dbDao.connect();
    logger.info(`   Connected to a DB`);
    for (const userJson of userFixtures) {
      try {
        logger.info(`       Inserting user: ${userJson.first_name}`);
        await userManager.create(new UserModel(userJson));
      } catch (error) {
        logger.warn(`       Failed to insert user: ${userJson.first_name}`);
      }
    }
    logger.info(`   Finished import`);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
