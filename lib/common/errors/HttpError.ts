import { Status } from '../helpers/ResponseConstants';

export default class HttpError extends Error {
  private readonly status: Status;

  constructor(status: Status, message: string) {
    super(message);
    this.status = status;
  }

  public getStatus(): Status {
    return this.status;
  }

  public getMessage(): string {
    return this.message;
  }
}
