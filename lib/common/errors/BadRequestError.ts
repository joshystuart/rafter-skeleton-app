import HttpError from "./HttpError";
import { Status } from "../helpers/ResponseConstants";

export default class BadRequestError extends HttpError {
  constructor(message = `Bad Request`) {
    super(Status.BAD_REQUEST, message);
  }
}
