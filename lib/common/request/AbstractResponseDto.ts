export default class AbstractResponseDto {
  public setMarketplace(marketplace) {
    this.marketplace = marketplace;
    return this;
  }

  /**
   * @returns {Marketplace}
   */
  public getMarketplace() {
    return this.marketplace;
  }
}
