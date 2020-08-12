class LinkResponseDto {
  /**
   * @param {String} self
   * @param {String=} related
   */
  constructor(self, related) {
    this.self = self;
    this.related = related;
  }

  /**
   * @return {String}
   */
  getSelf() {
    return this.self;
  }

  /**
   * @param {String} self
   * @return {LinkResponseDto}
   */
  setSelf(self) {
    this.self = self;
    return this;
  }

  /**
   * @return {String}
   */
  getRelated() {
    return this.related;
  }

  /**
   * @param {String} related
   * @return {LinkResponseDto}
   */
  setRelated(related) {
    this.related = related;
    return this;
  }
}

export default LinkResponseDto;
