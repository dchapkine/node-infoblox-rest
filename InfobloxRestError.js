/**
 * Infoblox REST Api Error
 */
class InfobloxRestError extends Error {
  /**
   * @param {String} params.message
   * @param {Object} params.httpStatus
   * @param {Object} params.client 
   */
  constructor(params) {
    const {message, httpStatus, client} = params;
    super(message);
    this.httpStatus = httpStatus;
  }
}

module.exports = InfobloxRestError;
