export default class AbstractCollectionResponseDto {
  constructor(offset = 0, limit = 0, total = 0) {
    this.offset = offset;
    this.limit = limit;
    this.total = total;
  }

  /**
   * @return {number}
   */
  getOffset() {
    return this.offset;
  }

  /**
   * @return {number}
   */
  getLimit() {
    return this.limit;
  }

  /**
   * @return {number}
   */
  getTotal() {
    return this.total;
  }
}
