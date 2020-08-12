export type Value = string | number;
export type OperatorValue = {
  [operator: string]: Value;
};

export type Filter = {
  [key: string]: OperatorValue | Value;
};

export class FilterDto {
  private readonly key: string;
  private readonly value: string | number;
  private readonly operator?: string;

  constructor(key: string, value: string | number, operator?: string) {
    this.key = key;
    this.value = value;
    this.operator = operator;
  }

  public getKey(): string {
    return this.key;
  }

  public getValue(): string | number {
    return this.value;
  }

  public getOperator(): string | undefined {
    return this.operator;
  }
}

export default FilterDto;
