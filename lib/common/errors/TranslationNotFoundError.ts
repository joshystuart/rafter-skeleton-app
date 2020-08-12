import HttpError from './HttpError';
import { Status } from '../helpers/ResponseConstants';

/**
 * Throws an error when the translation files for a requested locale do not exist.
 */
export default class TranslationNotFoundError extends HttpError {
  constructor(message = `Not found`) {
    super(Status.PAGE_NOT_FOUND, message);
  }
}
