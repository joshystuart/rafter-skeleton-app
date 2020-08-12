export default class Logger {
  constructor(winston) {
    this.winston = winston;
  }

  /**
   * @param args
   */
  log(...args) {
    this.winston.log.apply(this.winston, args);
  }

  /**
   * @param args
   */
  debug(...args) {
    this.winston.debug.apply(this.winston, args);
  }

  /**
   * @param args
   */
  info(...args) {
    this.winston.info.apply(this.winston, args);
  }

  /**
   * @param args
   */
  error(...args) {
    this.winston.error.apply(this.winston, args);
  }

  /**
   * @param args
   */
  warn(...args) {
    this.winston.warn.apply(this.winston, args);
  }
}
