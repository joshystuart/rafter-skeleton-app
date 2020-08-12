import { Request, Response } from 'rafter';
import { Status } from '../helpers/ResponseConstants';
import HttpError from '../errors/HttpError';

export abstract class AbstractRendererService {
  public async renderError(request: Request, response: Response, error: Error): Promise<void> {
    let status = Status.INTERNAL_SERVER_ERROR;
    let message: string;

    if (error instanceof HttpError) {
      message = error.message;
      if (error.getStatus()) {
        status = error.getStatus();
      }
    } else {
      message = error.toString();
    }

    response.status(status).send(message);
  }
}

export default AbstractRendererService;
