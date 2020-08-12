export default class AbstractRequestDto {
  private activeUser: any;
  private marketplace: any;

  public setActiveUser(activeUser): AbstractRequestDto {
    this.activeUser = activeUser;
    return this;
  }

  public getActiveUser() {
    return this.activeUser;
  }

  /**
   * @param {Marketplace} marketplace
   * @return {AbstractRequestDto}
   */
  public setMarketplace(marketplace): AbstractRequestDto {
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
