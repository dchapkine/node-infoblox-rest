/**
 * Infoblox REST Api Response object
 */
class InfobloxRestResponse {
  /**
   * @param {String} params.request
   * @param {Number} params.data
   * @param {InfobloxRestClient} params.client 
   */
  constructor(params) {
    const {request, data, client} = params;
    this.request = request;
    this.data = data;
    this.client = client;
  }
}

module.exports = InfobloxRestResponse;
