import HttpError from "./HttpError";
import { Status } from "../helpers/ResponseConstants";

export default class InternalServerError extends HttpError {
  constructor(message = `The server encountered an unexpected problem`) {
    super(Status.INTERNAL_SERVER_ERROR, message);
  }
}
