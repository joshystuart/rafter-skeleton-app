class DataResponseDto {
  /**
   * @param {string} id
   * @param {string} type
   * @param {object} attributes
   */
  constructor(id, type, attributes) {
    this.id = id;
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * @return {string}
   */
  getId() {
    return this.id;
  }

  /**
   * @param {string} id
   * @return {DataResponseDto}
   */
  setId(id) {
    this.id = id;
    return this;
  }

  /**
   * @return {string}
   */
  getType() {
    return this.type;
  }

  /**
   * @param {string} type
   * @return {DataResponseDto}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   * @return {object}
   */
  getAttributes() {
    return this.attributes;
  }

  /**
   * @param {object} attributes
   * @return {DataResponseDto}
   */
  setAttributes(attributes) {
    this.attributes = attributes;
    return this;
  }
}

export default DataResponseDto;
