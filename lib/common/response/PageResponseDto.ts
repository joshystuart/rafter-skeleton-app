class PageResponseDto {
  /**
   * @param {number} offset
   * @param {number} limit
   * @param {number} total
   */
  constructor(offset = 0, limit = 1, total = 1) {
    this.limit = limit;
    this.offset = offset;
    this.total = total;
  }

  /**
   * @return {Number}
   */
  getLimit() {
    return this.limit;
  }

  /**
   * @param {Number} limit
   * @return {PageResponseDto}
   */
  setLimit(limit) {
    this.limit = limit;
    return this;
  }

  /**
   * @return {Number}
   */
  getOffset() {
    return this.offset;
  }

  /**
   * @param {Number} offset
   * @return {PageResponseDto}
   */
  setOffset(offset) {
    this.offset = offset;
    return this;
  }

  /**
   * @return {Number}
   */
  getTotal() {
    return this.total;
  }

  /**
   * @param {Number} total
   * @return {PageResponseDto}
   */
  setTotal(total) {
    this.total = total;
    return this;
  }
}

export default PageResponseDto;
