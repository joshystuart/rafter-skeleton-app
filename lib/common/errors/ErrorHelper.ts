import HttpError from "./HttpError";
import InternalServerError from "./InternalServerError";

export default class ErrorHelper {
  /**
   * Normalizes the error message into a concrete {@link HttpError}.
   *
   * This helps with returning error codes and messages.
   *
   * @param {HttpError|Error} err
   * @return {HttpError}
   */
  public normalizeError(err: Error): Error {
    if (err instanceof HttpError) {
      return err;
    }

    return new InternalServerError(err.message);
  }
}
