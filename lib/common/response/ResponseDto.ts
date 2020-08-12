import DataResponseDto from './DataResponseDto';
import MetadataResponseDto from './MetadataResponseDto';

export type Model = {
  getId?: () => string;
  id: string;
};

class ResponseDto {
  private readonly data: DataResponseDto | DataResponseDto[];
  private readonly metadata: MetadataResponseDto;

  constructor(data: DataResponseDto | DataResponseDto[], metadata: MetadataResponseDto) {
    this.data = data;
    this.metadata = metadata;
  }

  public getData(): DataResponseDto | DataResponseDto[] {
    return this.data;
  }

  public getMetadata(): MetadataResponseDto {
    return this.metadata;
  }
}

export default ResponseDto;
