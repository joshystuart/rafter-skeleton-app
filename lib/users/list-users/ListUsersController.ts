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
    rendererService,
  ) {
    this.getRequestDtoProvider = getRequestDtoProvider;
    this.listUsersInteractor = listUsersInteractor;
    this.usersCollectionResponseDtoToResponseDtoTransformer = usersCollectionResponseDtoToResponseDtoTransformer;
    this.rendererService = rendererService;
  }

  /**
   *
   * @param {express.Request} req
   * @param {express.Response} res
   * @return {Promise<void>}
   */
  async listUsers(req, res) {
    const request = this.getRequestDtoProvider.createInstance(req);

    // convert express request into list user request
    const usersCollectionResponseDto = await this.listUsersInteractor.listUsers(request);

    // map the interactor response to a response dto
    const response = this.usersCollectionResponseDtoToResponseDtoTransformer.convert(usersCollectionResponseDto);

    // convert list user response into json
    await this.rendererService.render(req, res, response);
  }
}
