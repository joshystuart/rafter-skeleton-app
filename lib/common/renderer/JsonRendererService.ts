import AbstractRendererService from "./AbstractRendererService";
import { RendererService } from "./RendererService";
import { Request, Response } from "rafter";
import ResponseDto from "../response/ResponseDto";
import Transformer from "../mappers/Transformer";

class JsonRendererService extends AbstractRendererService
  implements RendererService {
  private responseDtoToJsonTransformer: Transformer;

  constructor(responseDtoToJsonTransformer: Transformer) {
    super();
    this.responseDtoToJsonTransformer = responseDtoToJsonTransformer;
  }

  public async render(
    request: Request,
    response: Response,
    responseDto: ResponseDto
  ): Promise<void> {
    response.json(this.responseDtoToJsonTransformer.convert(responseDto));
  }
}

export default JsonRendererService;
