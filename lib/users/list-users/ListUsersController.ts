export default class ListUsersController {
  /**
   * @param {GetRequestDtoProvider} getRequestDtoProvider
   * @param {ListUsersInteractor} listUsersInteractor
   * @param {TransformerInterface} usersCollectionResponseDtoToResponseDtoTransformer
   * @param {RendererServiceInterface} rendererService
   */
  constructor(
    getRequestDtoProvider,
    listUsersInteractor,
    usersCollectionResponseDtoToResponseDtoTransformer,
    rendererService
  ) {
    this._getRequestDtoProvider = getRequestDtoProvider;
    this._listUsersInteractor = listUsersInteractor;
    this._usersCollectionResponseDtoToResponseDtoTransformer = usersCollectionResponseDtoToResponseDtoTransformer;
    this._rendererService = rendererService;
  }

  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   * @return {Promise<void>}
   */
  async listUsers(req, res) {
    const request = this._getRequestDtoProvider.createInstance(req);

    // convert express request into list user request
    const usersCollectionResponseDto = await this._listUsersInteractor.listUsers(
      request
    );

    // map the interactor response to a response dto
    const response = this._usersCollectionResponseDtoToResponseDtoTransformer.convert(
      usersCollectionResponseDto
    );

    // convert list user response into json
    await this._rendererService.render(req, res, response);
  }
}
