class MetadataResponseDto {
  /**
   * @param {PageResponseDto} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * @return {PageResponseDto}
   */
  getPage() {
    return this.page;
  }

  /**
   * @param {PageResponseDto} page
   * @return {MetadataResponseDto}
   */
  setPage(page) {
    this.page = page;
    return this;
  }
}

export default MetadataResponseDto;
