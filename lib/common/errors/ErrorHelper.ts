import HttpError from './HttpError';
import InternalServerError from './InternalServerError';

export default class ErrorHelper {
  /**
   * Normalizes the error message into a concrete {@link HttpError}.
   *
   * This helps with returning error codes and messages.
   *
   * @param {HttpError|Error} error
   * @return {HttpError}
   */
  public normalizeError(error: Error): Error {
    if (error instanceof HttpError) {
      return error;
    }

    return new InternalServerError(error.message);
  }
}
