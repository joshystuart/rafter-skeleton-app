import { Request, Response } from 'rafter';

export default class HomeController {
  public async index(request: Request, response: Response): Promise<void> {
    response.send(
      // eslint-disable-next-line max-len
      'Hi there. This is a project that shows how rafter can be used to help speed up development. Currently there is only 1 other endpoint: localhost:/v1/users',
    );
  }
}
