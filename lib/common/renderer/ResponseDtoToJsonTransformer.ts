import Transformer from "../mappers/Transformer";
import DataResponseDto from "../response/DataResponseDto";
import MetadataResponseDto from "../response/MetadataResponseDto";
import {
  JsonDataResponse,
  JsonMetaDataResponse,
  JsonResponse,
} from "./RendererService";
import ResponseDto from "../response/ResponseDto";

class ResponseDtoToJsonTransformer
  implements Transformer<ResponseDto, JsonResponse> {
  public convert(source: ResponseDto): JsonResponse {
    return {
      data: this.getData(source.getData()),
      meta: this.getMetadata(source.getMetadata()),
    };
  }

  private getMetadata(
    metadataResponse: MetadataResponseDto
  ): JsonMetaDataResponse {
    const metadata = {};

    if (metadataResponse) {
      const page = metadataResponse.getPage();
      if (page) {
        return {
          page: {
            limit: page.getLimit(),
            offset: page.getOffset(),
            total: page.getTotal(),
          },
        };
      }
    }

    return metadata;
  }

  private getData(
    data: DataResponseDto | DataResponseDto[]
  ): JsonDataResponse[] | JsonDataResponse {
    let formattedData;

    if (data instanceof Array) {
      formattedData = [];

      for (const dataObject of data) {
        formattedData.push(this.formatData(dataObject));
      }
    } else {
      formattedData = this.formatData(data);
    }

    return formattedData;
  }

  private formatData(data: DataResponseDto): JsonDataResponse {
    return {
      id: data.getId(),
      type: data.getType(),
      attributes: data.getAttributes(),
    };
  }
}

export default ResponseDtoToJsonTransformer;
