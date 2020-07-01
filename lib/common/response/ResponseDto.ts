import DataResponseDto from "./DataResponseDto";
import MetadataResponseDto from "./MetadataResponseDto";

class ResponseDto {
  private data: DataResponseDto;
  private metadata: MetadataResponseDto;

  constructor(data: DataResponseDto, metadata: MetadataResponseDto) {
    this.data = data;
    this.metadata = metadata;
  }

  public getData(): DataResponseDto {
    return this.data;
  }

  public getMetadata(): MetadataResponseDto {
    return this.metadata;
  }
}

export default ResponseDto;
