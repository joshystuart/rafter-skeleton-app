export type Params = {
  id: string;
};

export default class ParamsDto {
  private readonly id: string;

  constructor(id: string) {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }
}
