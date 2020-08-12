import { Request, Response } from 'rafter';
import ResponseDto from '../response/ResponseDto';

export interface RendererService {
  render(request: Request, response: Response, responseDto: ResponseDto): Promise<void>;

  renderError(request: Request, response: Response, error: Error): Promise<void>;
}

export type JsonDataResponse = {
  id: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  attributes: object;
};

export type JsonMetaDataResponse = {
  page?: {
    limit: number;
    offset: number;
    total: number;
  };
};

export type JsonResponse = {
  data: JsonDataResponse | JsonDataResponse[];
  meta: JsonMetaDataResponse;
};

export default (jsonRendererService: RendererService): RendererService => {
  return jsonRendererService;
};
