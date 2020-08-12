import ResponseDto, { Model } from './ResponseDto';
import DataResponseDto from './DataResponseDto';
import MetadataResponseDto from './MetadataResponseDto';
import PageResponseDto from './PageResponseDto';

export default class ResponseDtoProvider {
  public createInstance(models: Model | Model[], entityType: string, offset = 0, limit = 1, total = 1): ResponseDto {
    const pageResponse = new PageResponseDto(offset, limit, total);
    const metadataResponse = new MetadataResponseDto(pageResponse);
    const dataResponse = this.createDataResponseInstance(models, entityType);
    return new ResponseDto(dataResponse, metadataResponse);
  }

  private createDataResponseInstance(models: Model | Model[], entityType: string): DataResponseDto | DataResponseDto[] {
    let data: DataResponseDto | DataResponseDto[];

    if (models instanceof Array) {
      data = [];
      for (const model of models) {
        data.push(new DataResponseDto(this.getModelId(model), entityType, model));
      }
    } else {
      data = new DataResponseDto(this.getModelId(models), entityType, models);
    }

    return data;
  }

  /**
   * @param {object} source
   * @private
   */
  private getModelId(source: Model) {
    // check if there is an id getter
    if (source.getId instanceof Function) {
      return source.getId();
    }

    return source.id;
  }
}
